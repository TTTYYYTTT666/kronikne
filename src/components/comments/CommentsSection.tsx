'use client';

import { useState } from 'react';
import { addComment, deleteComment } from '@/actions/comment-actions';
import { useOptimistic } from 'react';

interface User {
    id: string;
    name?: string | null;
    image?: string | null;
}

interface Comment {
    id: string;
    text: string;
    createdAt: Date;
    user: User;
}

interface CommentsSectionProps {
    carSlug: string;
    currentUser?: User | null;
    comments: Comment[];
}

export default function CommentsSection({ carSlug, currentUser, comments }: CommentsSectionProps) {
    const [optimisticComments, addOptimisticComment] = useOptimistic(
        comments,
        (state, newComment: Comment) => [newComment, ...state]
    );

    const [text, setText] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!text.trim() || !currentUser) return;

        setIsSubmitting(true);

        const newComment = {
            id: Math.random().toString(), // Temp ID
            text: text,
            createdAt: new Date(),
            user: currentUser
        };

        addOptimisticComment(newComment);

        try {
            await addComment(carSlug, text);
            setText('');
        } catch (error) {
            console.error(error);
            alert('Yorum gönderilemedi');
        } finally {
            setIsSubmitting(false);
        }
    }

    async function handleDelete(authorId: string, commentId: string) {
        if (!currentUser || currentUser.id !== authorId) return;
        if (!confirm('Silmek istediğinize emin misiniz?')) return;

        try {
            await deleteComment(commentId);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="mt-12 bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-zinc-800">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                💬 Kullanıcı Yorumları
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    ({optimisticComments.length})
                </span>
            </h3>

            {/* Comment Form */}
            {currentUser ? (
                <form onSubmit={handleSubmit} className="mb-10">
                    <div className="flex gap-4">
                        <img
                            src={currentUser.image || `https://ui-avatars.com/api/?name=${currentUser.name}`}
                            alt={currentUser.name || 'User'}
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-grow">
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Bu araçla ilgili tecrübelerinizi veya sorularınızı yazın..."
                                className="w-full bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-xl p-4 min-h-[100px] focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all resize-y text-gray-900 dark:text-gray-100"
                                required
                            />
                            <div className="flex justify-end mt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting || !text.trim()}
                                    className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Gönderiliyor...' : 'Yorum Yap'}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="mb-10 p-8 bg-gray-50 dark:bg-zinc-800/50 rounded-xl text-center border border-gray-100 dark:border-zinc-800 flex flex-col items-center justify-center gap-4">
                    <p className="text-gray-600 dark:text-gray-400">
                        Bu araç hakkında yorum yapmak veya soru sormak için giriş yapmalısınız.
                    </p>
                    <a
                        href="/giris"
                        className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-emerald-500/20"
                    >
                        Giriş Yap / Üye Ol
                    </a>
                </div>
            )}

            {/* Comments List */}
            <div className="space-y-6">
                {optimisticComments.length === 0 ? (
                    <p className="text-gray-500 text-center py-8 italic">Henüz yorum yapılmamış. İlk yorumu siz yapın!</p>
                ) : (
                    optimisticComments.map((comment) => (
                        <div key={comment.id} className="flex gap-4 group">
                            <img
                                src={comment.user.image || `https://ui-avatars.com/api/?name=${comment.user.name}`}
                                alt={comment.user.name || 'User'}
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="flex-grow">
                                <div className="flex items-center justify-between mb-1">
                                    <div>
                                        <span className="font-bold text-gray-900 dark:text-white mr-2">
                                            {comment.user.name}
                                        </span>
                                        <span className="text-xs text-gray-500">
                                            {new Date(comment.createdAt).toLocaleDateString('tr-TR', {
                                                day: 'numeric', month: 'long', year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                    {currentUser?.id === comment.user.id && (
                                        <button
                                            onClick={() => handleDelete(comment.user.id, comment.id)}
                                            className="text-red-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                                        >
                                            Sil
                                        </button>
                                    )}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                    {comment.text}
                                </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
