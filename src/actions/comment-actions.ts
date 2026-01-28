'use server';

import { auth } from '@/auth';
import { prisma } from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function addComment(carSlug: string, text: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    await prisma.comment.create({
        data: {
            text,
            carSlug,
            userId: session.user.id
        }
    });

    revalidatePath(`/arac/${carSlug}`); // Assuming car detail page is here, need to check route
}

export async function deleteComment(commentId: string) {
    const session = await auth();
    if (!session?.user?.id) throw new Error('Oturum açmalısınız');

    // Check ownership
    const comment = await prisma.comment.findUnique({
        where: { id: commentId },
    });

    if (comment?.userId !== session.user.id) throw new Error('Yetkiniz yok');

    await prisma.comment.delete({
        where: { id: commentId }
    });

    revalidatePath(`/arac/${comment.carSlug}`);
}
