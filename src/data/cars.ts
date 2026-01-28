import { Car, Brand } from '@/types';

export const brands: Brand[] = [
    {
        id: 'fiat',
        name: 'Fiat',
        logo: 'https://logo.clearbit.com/fiat.com',
        models: [
            { id: 'egea', name: 'Egea', variants: [{ id: 'egea-1-4', name: '1.4 Fire', years: '2015-2024', slug: 'fiat-egea-1-4-fire' }, { id: 'egea-1-3', name: '1.3 MultiJet', years: '2015-2024', slug: 'fiat-egea-1-3-multijet' }, { id: 'egea-cross', name: 'Cross 1.4', years: '2020-2024', slug: 'fiat-egea-cross-1-4' }] },
            { id: 'linea', name: 'Linea', variants: [{ id: 'linea-1-3', name: '1.3 MultiJet', years: '2007-2017', slug: 'fiat-linea-1-3-multijet' }] },
            { id: 'doblo', name: 'Doblo', variants: [{ id: 'doblo-1-6', name: '1.6 MultiJet', years: '2010-2022', slug: 'fiat-doblo-1-6-multijet' }] },
            { id: 'fiorino', name: 'Fiorino', variants: [{ id: 'fiorino-1-3', name: '1.3 MultiJet', years: '2008-2024', slug: 'fiat-fiorino-1-3-multijet' }] },
            { id: 'punto', name: 'Punto', variants: [{ id: 'punto-evo', name: 'Evo 1.3 MultiJet', years: '2010-2013', slug: 'fiat-punto-evo-1-3-multijet' }] }
        ]
    },
    {
        id: 'renault',
        name: 'Renault',
        logo: 'https://logo.clearbit.com/renault.com',
        models: [
            { id: 'clio', name: 'Clio', variants: [{ id: 'clio-5', name: 'Clio 5 1.0 TCe', years: '2019-2024', slug: 'renault-clio-5-1-0-tce' }, { id: 'clio-4', name: 'Clio 4 1.5 dCi', years: '2012-2019', slug: 'renault-clio-4-1-5-dci' }] },
            { id: 'megane', name: 'Megane', variants: [{ id: 'megane-4', name: 'Megane 4 1.3 TCe', years: '2016-2023', slug: 'renault-megane-4-1-3-tce' }] },
            { id: 'symbol', name: 'Symbol', variants: [{ id: 'symbol-3', name: 'Symbol 1.5 dCi', years: '2013-2021', slug: 'renault-symbol-1-5-dci' }] },
            { id: 'taliant', name: 'Taliant', variants: [{ id: 'taliant-1-0', name: '1.0 Turbo', years: '2021-2024', slug: 'renault-taliant-1-0-turbo' }] },
            { id: 'captur', name: 'Captur', variants: [{ id: 'captur-2', name: '1.3 TCe', years: '2020-2024', slug: 'renault-captur-1-3-tce' }] },
            { id: 'austral', name: 'Austral', variants: [{ id: 'austral-hybrid', name: 'E-Tech Hybrid', years: '2022-2024', slug: 'renault-austral-hybrid' }] },
            { id: 'fluence', name: 'Fluence', variants: [{ id: 'fluence-1-5', name: '1.5 dCi', years: '2010-2016', slug: 'renault-fluence-1-5-dci' }] },
            { id: 'kadjar', name: 'Kadjar', variants: [{ id: 'kadjar-1-5', name: '1.5 dCi', years: '2015-2022', slug: 'renault-kadjar-1-5-dci' }] },
            { id: 'talisman', name: 'Talisman', variants: [{ id: 'talisman-1-6', name: '1.6 dCi', years: '2016-2020', slug: 'renault-talisman-1-6-dci' }] }
        ]
    },
    {
        id: 'volkswagen',
        name: 'Volkswagen',
        logo: 'https://logo.clearbit.com/volkswagen.com',
        models: [
            { id: 'passat', name: 'Passat', variants: [{ id: 'passat-b8', name: 'B8 1.6 TDI', years: '2015-2023', slug: 'volkswagen-passat-b8-1-6-tdi' }] },
            { id: 'golf', name: 'Golf', variants: [{ id: 'golf-7', name: 'Golf 7 1.4 TSI', years: '2012-2020', slug: 'volkswagen-golf-7-1-4-tsi' }, { id: 'golf-8', name: 'Golf 8 1.0 eTSI', years: '2020-2024', slug: 'volkswagen-golf-8-1-0-etsi' }] },
            { id: 'polo', name: 'Polo', variants: [{ id: 'polo-6', name: 'Polo 1.0 TSI', years: '2017-2024', slug: 'volkswagen-polo-1-0-tsi' }, { id: 'polo-1-4-tdi', name: 'Polo 1.4 TDI', years: '2014-2017', slug: 'volkswagen-polo-1-4-tdi' }] },
            { id: 'tiguan', name: 'Tiguan', variants: [{ id: 'tiguan-2', name: '1.5 TSI', years: '2016-2023', slug: 'volkswagen-tiguan-1-5-tsi' }] },
            { id: 'troc', name: 'T-Roc', variants: [{ id: 'troc-1', name: '1.5 TSI', years: '2018-2024', slug: 'volkswagen-t-roc-1-5-tsi' }] },
            { id: 'caddy', name: 'Caddy', variants: [{ id: 'caddy-5', name: '2.0 TDI', years: '2020-2024', slug: 'volkswagen-caddy-2-0-tdi' }] },
            { id: 'jetta', name: 'Jetta', variants: [{ id: 'jetta-mk6', name: '1.4 TSI', years: '2011-2018', slug: 'volkswagen-jetta-1-4-tsi' }] },
            { id: 'arteon', name: 'Arteon', variants: [{ id: 'arteon-1-5', name: '1.5 TSI', years: '2017-2024', slug: 'volkswagen-arteon-1-5-tsi' }] },
            { id: 'amarok', name: 'Amarok', variants: [{ id: 'amarok-v6', name: '3.0 V6 TDI', years: '2016-2022', slug: 'volkswagen-amarok-v6-tdi' }] },
            { id: 'transporter', name: 'Transporter', variants: [{ id: 'transporter-t6', name: 'T6 2.0 TDI', years: '2015-2024', slug: 'volkswagen-transporter-t6' }] }
        ]
    },
    {
        id: 'honda',
        name: 'Honda',
        logo: 'https://logo.clearbit.com/honda.com',
        models: [
            { id: 'civic', name: 'Civic', variants: [{ id: 'civic-fc5', name: 'FC5 1.6 i-VTEC', years: '2016-2021', slug: 'honda-civic-fc5-1-6-vtec' }, { id: 'civic-fe1', name: 'FE1 1.5 Turbo', years: '2021-2024', slug: 'honda-civic-fe1-1-5-turbo' }] },
            { id: 'city', name: 'City', variants: [{ id: 'city-new', name: '1.5 i-VTEC', years: '2021-2024', slug: 'honda-city-1-5-i-vtec' }] },
            { id: 'crv', name: 'CR-V', variants: [{ id: 'crv-hybrid', name: '2.0 Hybrid', years: '2019-2023', slug: 'honda-crv-hybrid' }] },
            { id: 'jazz', name: 'Jazz', variants: [{ id: 'jazz-hybrid', name: '1.5 Hybrid', years: '2020-2024', slug: 'honda-jazz-hybrid' }] },
            { id: 'civic-fb7', name: 'Civic FB7', variants: [{ id: 'civic-fb7-eco', name: '1.6 i-VTEC Eco', years: '2012-2016', slug: 'honda-civic-fb7-1-6-eco' }] }
        ]
    },
    {
        id: 'toyota',
        name: 'Toyota',
        logo: 'https://logo.clearbit.com/toyota.com',
        models: [
            { id: 'corolla', name: 'Corolla', variants: [{ id: 'corolla-hybrid', name: 'Hybrid Dream', years: '2019-2024', slug: 'toyota-corolla-hybrid' }, { id: 'corolla-1-5', name: '1.5 Vision', years: '2020-2024', slug: 'toyota-corolla-1-5-vision' }] },
            { id: 'chr', name: 'C-HR', variants: [{ id: 'chr-hybrid', name: '1.8 Hybrid', years: '2016-2023', slug: 'toyota-chr-1-8-hybrid' }] },
            { id: 'yaris', name: 'Yaris', variants: [{ id: 'yaris-hybrid', name: '1.5 Hybrid', years: '2020-2024', slug: 'toyota-yaris-hybrid' }] },
            { id: 'corolla-cross', name: 'Corolla Cross', variants: [{ id: 'corolla-cross-hybrid', name: '1.8 Hybrid', years: '2022-2024', slug: 'toyota-corolla-cross-hybrid' }] },
            { id: 'auris', name: 'Auris', variants: [{ id: 'auris-1-6', name: '1.6 Valvematic', years: '2013-2018', slug: 'toyota-auris-1-6-valvematic' }] },
            { id: 'avensis', name: 'Avensis', variants: [{ id: 'avensis-1-6', name: '1.6 D-4D', years: '2015-2018', slug: 'toyota-avensis-1-6-d4d' }] }
        ]
    },
    {
        id: 'hyundai',
        name: 'Hyundai',
        logo: 'https://logo.clearbit.com/hyundai.com',
        models: [
            { id: 'i20', name: 'i20', variants: [{ id: 'i20-jump', name: '1.4 Jump', years: '2020-2024', slug: 'hyundai-i20-1-4-jump' }] },
            { id: 'i10', name: 'i10', variants: [{ id: 'i10-1-2', name: '1.2 MPI', years: '2020-2024', slug: 'hyundai-i10-1-2-mpi' }] },
            { id: 'bayon', name: 'Bayon', variants: [{ id: 'bayon-1-4', name: '1.4 MPI', years: '2021-2024', slug: 'hyundai-bayon-1-4-mpi' }] },
            { id: 'tucson', name: 'Tucson', variants: [{ id: 'tucson-1-6', name: '1.6 T-GDI', years: '2021-2024', slug: 'hyundai-tucson-1-6-t-gdi' }] },
            { id: 'elantra', name: 'Elantra', variants: [{ id: 'elantra-1-6', name: '1.6 MPI', years: '2021-2024', slug: 'hyundai-elantra-1-6-mpi' }] },
            { id: 'accent', name: 'Accent Blue', variants: [{ id: 'accent-blue-1-6', name: '1.6 CRDi', years: '2011-2018', slug: 'hyundai-accent-blue-1-6-crdi' }] }
        ]
    },
    {
        id: 'ford',
        name: 'Ford',
        logo: 'https://logo.clearbit.com/ford.com',
        models: [
            { id: 'focus', name: 'Focus', variants: [{ id: 'focus-4', name: '1.5 Ti-VCT', years: '2018-2024', slug: 'ford-focus-1-5-ti-vct' }] },
            { id: 'fiesta', name: 'Fiesta', variants: [{ id: 'fiesta-1-0', name: '1.0 EcoBoost', years: '2017-2023', slug: 'ford-fiesta-1-0-ecoboost' }] },
            { id: 'puma', name: 'Puma', variants: [{ id: 'puma-1-0', name: '1.0 EcoBoost', years: '2020-2024', slug: 'ford-puma-1-0-ecoboost' }] },
            { id: 'kuga', name: 'Kuga', variants: [{ id: 'kuga-1-5', name: '1.5 EcoBlue', years: '2020-2024', slug: 'ford-kuga-1-5-ecoblue' }] },
            { id: 'courier', name: 'Courier', variants: [{ id: 'courier-1-5', name: '1.5 TDCi', years: '2014-2023', slug: 'ford-tourneo-courier-1-5-tdci' }] },
            { id: 'mondeo', name: 'Mondeo', variants: [{ id: 'mondeo-mk5', name: '1.5 EcoBoost', years: '2014-2022', slug: 'ford-mondeo-1-5-ecoboost' }] },
            { id: 'ranger', name: 'Ranger', variants: [{ id: 'ranger-wildtrak', name: 'Wildtrak 2.0', years: '2019-2023', slug: 'ford-ranger-wildtrak' }] }
        ]
    },
    {
        id: 'dacia',
        name: 'Dacia',
        logo: 'https://logo.clearbit.com/dacia.com.tr',
        models: [
            { id: 'duster', name: 'Duster', variants: [{ id: 'duster-1-3', name: '1.3 TCe', years: '2018-2024', slug: 'dacia-duster-1-3-tce' }] },
            { id: 'sandero', name: 'Sandero', variants: [{ id: 'sandero-stepway', name: 'Stepway 1.0 TCe', years: '2021-2024', slug: 'dacia-sandero-stepway-1-0-tce' }] },
            { id: 'jogger', name: 'Jogger', variants: [{ id: 'jogger-1-0', name: '1.0 TCe', years: '2022-2024', slug: 'dacia-jogger-1-0-tce' }] }
        ]
    },
    {
        id: 'peugeot',
        name: 'Peugeot',
        logo: 'https://logo.clearbit.com/peugeot.com',
        models: [
            { id: '208', name: '208', variants: [{ id: '208-1-2', name: '1.2 PureTech', years: '2019-2024', slug: 'peugeot-208-1-2-puretech' }] },
            { id: '308', name: '308', variants: [{ id: '308-new', name: '1.2 PureTech', years: '2022-2024', slug: 'peugeot-308-new-1-2' }] },
            { id: '2008', name: '2008', variants: [{ id: '2008-1-2', name: '1.2 PureTech', years: '2020-2024', slug: 'peugeot-2008-1-2-puretech' }] },
            { id: '3008', name: '3008', variants: [{ id: '3008-1-5', name: '1.5 BlueHDi', years: '2016-2023', slug: 'peugeot-3008-1-5-bluehdi' }] },
            { id: '408', name: '408', variants: [{ id: '408-1-2', name: '1.2 PureTech', years: '2023-2024', slug: 'peugeot-408-1-2-puretech' }] }
        ]
    },
    {
        id: 'skoda',
        name: 'Skoda',
        logo: 'https://logo.clearbit.com/skoda-auto.com',
        models: [
            { id: 'octavia', name: 'Octavia', variants: [{ id: 'octavia-4', name: '1.5 TSI e-Tec', years: '2020-2024', slug: 'skoda-octavia-1-5-tsi' }] },
            { id: 'superb', name: 'Superb', variants: [{ id: 'superb-3', name: '1.5 TSI', years: '2015-2023', slug: 'skoda-superb-1-5-tsi' }] },
            { id: 'kamiq', name: 'Kamiq', variants: [{ id: 'kamiq-1-0', name: '1.0 TSI', years: '2019-2024', slug: 'skoda-kamiq-1-0-tsi' }] },
            { id: 'scala', name: 'Scala', variants: [{ id: 'scala-1-0', name: '1.0 TSI', years: '2019-2024', slug: 'skoda-scala-1-0-tsi' }] }
        ]
    },
    {
        id: 'opel',
        name: 'Opel',
        logo: 'https://logo.clearbit.com/opel.com',
        models: [
            { id: 'corsa', name: 'Corsa', variants: [{ id: 'corsa-f', name: '1.2 Turbo', years: '2019-2024', slug: 'opel-corsa-1-2-turbo' }] },
            { id: 'astra', name: 'Astra', variants: [{ id: 'astra-l', name: '1.2 Turbo', years: '2022-2024', slug: 'opel-astra-1-2-turbo' }] },
            { id: 'mokka', name: 'Mokka', variants: [{ id: 'mokka-b', name: '1.2 Turbo', years: '2021-2024', slug: 'opel-mokka-1-2-turbo' }] },
            { id: 'crossland', name: 'Crossland', variants: [{ id: 'crossland-1-2', name: '1.2 Turbo', years: '2020-2024', slug: 'opel-crossland-1-2-turbo' }] }
        ]
    },
    {
        id: 'citroen',
        name: 'Citroen',
        logo: 'https://logo.clearbit.com/citroen.com',
        models: [
            { id: 'c3', name: 'C3', variants: [{ id: 'c3-1-2', name: '1.2 PureTech', years: '2016-2024', slug: 'citroen-c3-1-2-puretech' }] },
            { id: 'c4', name: 'C4', variants: [{ id: 'c4-new', name: '1.2 PureTech', years: '2021-2024', slug: 'citroen-c4-1-2-puretech' }] },
            { id: 'celysee', name: 'C-Elysee', variants: [{ id: 'celysee-1-5', name: '1.5 BlueHDi', years: '2012-2024', slug: 'citroen-celysee-1-5-bluehdi' }] }
        ]
    },
    {
        id: 'nissan',
        name: 'Nissan',
        logo: 'https://logo.clearbit.com/nissan.com.tr',
        models: [
            { id: 'qashqai', name: 'Qashqai', variants: [{ id: 'qashqai-j12', name: '1.3 DIG-T', years: '2021-2024', slug: 'nissan-qashqai-1-3-dig-t' }] },
            { id: 'juke', name: 'Juke', variants: [{ id: 'juke-f16', name: '1.0 DIG-T', years: '2019-2024', slug: 'nissan-juke-1-0-dig-t' }] }
        ]
    },
    {
        id: 'kia',
        name: 'Kia',
        logo: 'https://logo.clearbit.com/kia.com',
        models: [
            { id: 'sportage', name: 'Sportage', variants: [{ id: 'sportage-nq5', name: '1.6 T-GDI', years: '2022-2024', slug: 'kia-sportage-1-6-tgdi' }] },
            { id: 'stonic', name: 'Stonic', variants: [{ id: 'stonic-1-4', name: '1.4 MPI', years: '2017-2024', slug: 'kia-stonic-1-4-mpi' }] }
        ]
    },
    {
        id: 'bmw',
        name: 'BMW',
        logo: 'https://logo.clearbit.com/bmw.com',
        models: [
            { id: '3-series', name: '3 Serisi', variants: [{ id: 'f30', name: 'F30 320i', years: '2012-2018', slug: 'bmw-f30-320i' }, { id: 'f30-320d', name: 'F30 320d', years: '2012-2018', slug: 'bmw-f30-320d' }, { id: 'g20', name: 'G20 320i', years: '2019-2024', slug: 'bmw-g20-320i' }] },
            { id: '5-series', name: '5 Serisi', variants: [{ id: 'f10', name: 'F10 520i', years: '2010-2016', slug: 'bmw-f10-520i' }, { id: 'f10-520d', name: 'F10 520d', years: '2010-2016', slug: 'bmw-f10-520d' }, { id: 'g30', name: 'G30 520i', years: '2017-2023', slug: 'bmw-g30-520i' }] },
            { id: 'x1', name: 'X1', variants: [{ id: 'f48', name: 'F48 sDrive18i', years: '2015-2022', slug: 'bmw-x1-sdrive18i' }] },
            { id: 'x3', name: 'X3', variants: [{ id: 'g01', name: 'G01 xDrive20i', years: '2017-2024', slug: 'bmw-x3-xdrive20i' }] },
            { id: 'x5', name: 'X5', variants: [{ id: 'g05', name: 'G05 xDrive30d', years: '2018-2024', slug: 'bmw-x5-xdrive30d' }] }
        ]
    },
    {
        id: 'mercedes',
        name: 'Mercedes-Benz',
        logo: 'https://logo.clearbit.com/mercedes-benz.com',
        models: [
            { id: 'a-class', name: 'A Serisi', variants: [{ id: 'a180', name: 'A180 W177', years: '2018-2024', slug: 'mercedes-a180-w177' }] },
            { id: 'c-class', name: 'C Serisi', variants: [{ id: 'w204', name: 'C180 W204', years: '2007-2014', slug: 'mercedes-c180-w204' }, { id: 'w205', name: 'C200 W205', years: '2014-2021', slug: 'mercedes-c200-w205' }, { id: 'w206', name: 'C200 W206', years: '2021-2024', slug: 'mercedes-c200-w206' }] },
            { id: 'e-class', name: 'E Serisi', variants: [{ id: 'w212', name: 'E250 W212', years: '2009-2016', slug: 'mercedes-e250-w212' }, { id: 'w213', name: 'E200 W213', years: '2016-2023', slug: 'mercedes-e200-w213' }] },
            { id: 'cla', name: 'CLA', variants: [{ id: 'cla-c118', name: 'CLA 200 C118', years: '2019-2024', slug: 'mercedes-cla-200' }] },
            { id: 'glc', name: 'GLC', variants: [{ id: 'glc-x253', name: 'GLC 200 X253', years: '2015-2022', slug: 'mercedes-glc-200' }] }
        ]
    },
    {
        id: 'audi',
        name: 'Audi',
        logo: 'https://logo.clearbit.com/audi.com',
        models: [
            { id: 'a3', name: 'A3', variants: [{ id: 'a3-8v', name: 'A3 8V 1.4 TFSI', years: '2012-2020', slug: 'audi-a3-8v-1-4-tfsi' }, { id: 'a3-8v-tdi', name: 'A3 1.6 TDI', years: '2012-2017', slug: 'audi-a3-8v-1-6-tdi' }, { id: 'a3-8y', name: 'A3 8Y 35 TFSI', years: '2020-2024', slug: 'audi-a3-8y-35-tfsi' }] },
            { id: 'a4', name: 'A4', variants: [{ id: 'a4-b8', name: 'A4 B8 2.0 TDI', years: '2008-2015', slug: 'audi-a4-b8-2-0-tdi' }, { id: 'a4-b9', name: 'A4 B9 40 TFSI', years: '2016-2024', slug: 'audi-a4-b9-40-tfsi' }] },
            { id: 'a6', name: 'A6', variants: [{ id: 'a6-c7', name: 'A6 C7 2.0 TDI', years: '2011-2018', slug: 'audi-a6-c7-2-0-tdi' }, { id: 'a6-c8', name: 'A6 C8 40 TDI', years: '2018-2024', slug: 'audi-a6-c8-40-tdi' }] },
            { id: 'q3', name: 'Q3', variants: [{ id: 'q3-f3', name: 'Q3 F3 35 TFSI', years: '2018-2024', slug: 'audi-q3-35-tfsi' }] },
            { id: 'q5', name: 'Q5', variants: [{ id: 'q5-fy', name: 'Q5 FY 40 TDI', years: '2017-2024', slug: 'audi-q5-40-tdi' }] }
        ]
    },
    {
        id: 'seat',
        name: 'Seat',
        logo: 'https://logo.clearbit.com/seat.com',
        models: [
            { id: 'leon', name: 'Leon', variants: [{ id: 'leon-4', name: 'Leon 1.5 TSI', years: '2020-2024', slug: 'seat-leon-1-5-tsi' }] },
            { id: 'ibiza', name: 'Ibiza', variants: [{ id: 'ibiza-6f', name: 'Ibiza 1.0 TSI', years: '2017-2024', slug: 'seat-ibiza-1-0-tsi' }] },
            { id: 'arona', name: 'Arona', variants: [{ id: 'arona-1-0', name: 'Arona 1.0 TSI', years: '2018-2024', slug: 'seat-arona-1-0-tsi' }] },
            { id: 'ateca', name: 'Ateca', variants: [{ id: 'ateca-1-5', name: 'Ateca 1.5 TSI', years: '2016-2024', slug: 'seat-ateca-1-5-tsi' }] }
        ]
    },
    {
        id: 'volvo',
        name: 'Volvo',
        logo: 'https://logo.clearbit.com/volvocars.com',
        models: [
            { id: 's60', name: 'S60', variants: [{ id: 's60-t4', name: 'S60 T4', years: '2019-2024', slug: 'volvo-s60-t4' }] },
            { id: 'xc40', name: 'XC40', variants: [{ id: 'xc40-t4', name: 'XC40 T4', years: '2018-2024', slug: 'volvo-xc40-t4' }] },
            { id: 'xc60', name: 'XC60', variants: [{ id: 'xc60-b4', name: 'XC60 B4', years: '2017-2024', slug: 'volvo-xc60-b4' }] }
        ]
    },
    {
        id: 'mazda',
        name: 'Mazda',
        logo: 'https://logo.clearbit.com/mazda.com',
        models: [
            { id: 'mazda3', name: 'Mazda3', variants: [{ id: 'mazda3-bp', name: 'Mazda3 2.0 Skyactiv-G', years: '2019-2024', slug: 'mazda-3-2-0-skyactiv' }] },
            { id: 'cx5', name: 'CX-5', variants: [{ id: 'cx5-ke', name: 'CX-5 2.0 Skyactiv-G', years: '2017-2024', slug: 'mazda-cx5-2-0-skyactiv' }] },
            { id: 'cx30', name: 'CX-30', variants: [{ id: 'cx30-dm', name: 'CX-30 2.0 Skyactiv-G', years: '2020-2024', slug: 'mazda-cx30-2-0-skyactiv' }] }
        ]
    },
    {
        id: 'jeep',
        name: 'Jeep',
        logo: 'https://logo.clearbit.com/jeep.com',
        models: [
            { id: 'compass', name: 'Compass', variants: [{ id: 'compass-1-3', name: '1.3 Turbo', years: '2017-2024', slug: 'jeep-compass-1-3-turbo' }] },
            { id: 'renegade', name: 'Renegade', variants: [{ id: 'renegade-1-3', name: '1.3 Turbo', years: '2018-2024', slug: 'jeep-renegade-1-3-turbo' }] }
        ]
    },
    {
        id: 'suzuki',
        name: 'Suzuki',
        logo: 'https://logo.clearbit.com/suzuki.com',
        models: [
            { id: 'vitara', name: 'Vitara', variants: [{ id: 'vitara-1-4', name: '1.4 Boosterjet', years: '2015-2024', slug: 'suzuki-vitara-1-4-boosterjet' }] },
            { id: 's-cross', name: 'S-Cross', variants: [{ id: 'scross-hybrid', name: '1.4 Hybrid', years: '2021-2024', slug: 'suzuki-scross-1-4-hybrid' }] },
            { id: 'swift', name: 'Swift', variants: [{ id: 'swift-1-2', name: '1.2 Dualjet', years: '2017-2024', slug: 'suzuki-swift-1-2-dualjet' }] }
        ]
    },
    {
        id: 'mg',
        name: 'MG',
        logo: 'https://logo.clearbit.com/mgmotor.eu',
        models: [
            { id: 'zs', name: 'ZS', variants: [{ id: 'zs-ev', name: 'ZS EV', years: '2021-2024', slug: 'mg-zs-ev' }] },
            { id: 'hs', name: 'HS', variants: [{ id: 'hs-1-5', name: '1.5 Turbo', years: '2021-2024', slug: 'mg-hs-1-5-turbo' }] },
            { id: 'mg4', name: 'MG4', variants: [{ id: 'mg4-ev', name: 'MG4 Electric', years: '2023-2024', slug: 'mg-4-electric' }] }
        ]
    },
    {
        id: 'cupra',
        name: 'Cupra',
        logo: 'https://logo.clearbit.com/cupraofficial.com',
        models: [
            { id: 'formentor', name: 'Formentor', variants: [{ id: 'formentor-1-5', name: '1.5 TSI', years: '2020-2024', slug: 'cupra-formentor-1-5-tsi' }] },
            { id: 'born', name: 'Born', variants: [{ id: 'born-58', name: '58 kWh', years: '2022-2024', slug: 'cupra-born-58' }] },
            { id: 'leon', name: 'Leon', variants: [{ id: 'leon-vz', name: '2.0 TSI VZ', years: '2020-2024', slug: 'cupra-leon-2-0-vz' }] }
        ]
    },
    {
        id: 'alfa-romeo',
        name: 'Alfa Romeo',
        logo: 'https://logo.clearbit.com/alfaromeo.com',
        models: [
            { id: 'giulia', name: 'Giulia', variants: [{ id: 'giulia-2-0', name: '2.0 Turbo', years: '2016-2024', slug: 'alfa-romeo-giulia-2-0-turbo' }] },
            { id: 'stelvio', name: 'Stelvio', variants: [{ id: 'stelvio-2-0', name: '2.0 Turbo', years: '2017-2024', slug: 'alfa-romeo-stelvio-2-0-turbo' }] }
        ]
    },
    {
        id: 'mini',
        name: 'Mini',
        logo: 'https://logo.clearbit.com/mini.com',
        models: [
            { id: 'cooper', name: 'Cooper', variants: [{ id: 'cooper-f56', name: 'Cooper F56', years: '2014-2024', slug: 'mini-cooper-f56' }] },
            { id: 'countryman', name: 'Countryman', variants: [{ id: 'countryman-f60', name: 'Cooper F60', years: '2017-2024', slug: 'mini-countryman-f60' }] }
        ]
    },
    {
        id: 'ds',
        name: 'DS',
        logo: 'https://logo.clearbit.com/dsautomobiles.com',
        models: [
            { id: 'ds7', name: 'DS7 Crossback', variants: [{ id: 'ds7-1-6', name: '1.6 PureTech', years: '2018-2024', slug: 'ds-7-crossback-puretech' }] },
            { id: 'ds4', name: 'DS4', variants: [{ id: 'ds4-1-6', name: '1.6 PureTech', years: '2021-2024', slug: 'ds-4-puretech' }] }
        ]
    },
    {
        id: 'mitsubishi',
        name: 'Mitsubishi',
        logo: 'https://logo.clearbit.com/mitsubishi-motors.com',
        models: [
            { id: 'eclipse-cross', name: 'Eclipse Cross', variants: [{ id: 'eclipse-phev', name: 'PHEV', years: '2021-2024', slug: 'mitsubishi-eclipse-cross-phev' }] },
            { id: 'asx', name: 'ASX', variants: [{ id: 'asx-new', name: '1.3 Turbo', years: '2023-2024', slug: 'mitsubishi-asx-1-3-turbo' }] }
        ]
    },
    {
        id: 'togg',
        name: 'Togg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/TOGG_logo.svg/2560px-TOGG_logo.svg.png',
        models: [
            { id: 't10x', name: 'T10X', variants: [{ id: 't10x-v2', name: 'V2 Long Range', years: '2023-2024', slug: 'togg-t10x-v2-long-range' }] }
        ]
    },
    {
        id: 'land-rover',
        name: 'Land Rover',
        logo: 'https://logo.clearbit.com/landrover.com',
        models: [
            { id: 'range-rover-evoque', name: 'Range Rover Evoque', variants: [{ id: 'evoque-td4', name: '2.0 TD4', years: '2012-2018', slug: 'range-rover-evoque-td4' }] }
        ]
    }
];

export const cars: Car[] = [
    // FIAT
    {
        id: 'fiat-egea-1-4-fire',
        slug: 'fiat-egea-1-4-fire',
        brand: 'Fiat',
        model: 'Egea',
        variant: '1.4 Fire',
        years: '2015-2024',
        generation: 'Tip 356',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 72,
        totalIssues: 8,
        searchCount: 15420,
        issues: [
            { id: 'egea-1', title: 'Aşırı Yağ Tüketimi', description: 'Özellikle 2021 öncesi Euro 6b motorlarda piston segmanlarından kaynaklı yüksek yağ eksiltme (1000km/1L).', category: 'motor', riskLevel: 'HIGH', affectedKm: '30.000+ km', repairCost: '35.000 - 65.000 TL' },
            { id: 'egea-2', title: 'Ateşleme Bobini Arızası', description: 'Motorun teklemesi ve arıza lambası yakması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '50.000+ km', repairCost: '3.500 - 6.000 TL' },
            { id: 'egea-3', title: 'City Modu / Direksiyon', description: 'Direksiyon kutusu tıkırtısı ve City modu sertleşme sorunu.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '18.000 - 35.000 TL' }
        ],
        pros: ['Ekonomik yedek parça', 'Geniş iç hacim', 'LPG tam uyumu'],
        cons: ['Yüksek yakıt tüketimi', 'Yalıtım zayıf', 'Motor performansı (Yokuşta bayılma)'],
        buyingTips: ['Yağ çubuğunu kontrol edin (Bagajda yağ bidonu var mı?)', 'Direksiyonu tam tur çevirip ses dinleyin']
    },
    {
        id: 'fiat-egea-1-3-multijet',
        slug: 'fiat-egea-1-3-multijet',
        brand: 'Fiat',
        model: 'Egea',
        variant: '1.3 MultiJet',
        years: '2015-2024',
        generation: 'Tip 356',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 12500,
        issues: [
            { id: 'egea-m-1', title: 'DPF/Partikül Doluluğu', description: 'Sürekli şehir içi kullanımda DPF tıkanması ve rejenerasyon uyarısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: 'Şehir içi sürekli', repairCost: '6.000 - 15.000 TL' },
            { id: 'egea-m-2', title: 'Triger Zincir Sesi', description: '1.3 MultiJet motorlarda zincir uzaması sonucu şakırtılı çalışma (Soğukken belirgin).', category: 'motor', riskLevel: 'HIGH', affectedKm: '120.000+ km', repairCost: '12.000 - 22.000 TL' },
            { id: 'egea-m-3', title: 'AdBlue Pompası', description: 'Euro 6d motorlarda AdBlue şamandıra ve pompa arızası.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '25.000 - 40.000 TL' }
        ],
        pros: ['Çok düşük yakıt tüketimi', 'Torklu motor', 'Sağlam alt takım'],
        cons: ['Motor sesi kabine giriyor', 'AdBlue sorunları (2021 sonrası)', 'Şehir içinde DPF sorunu'],
        buyingTips: ['Zincir sesi var mı dinleyin (Soğuk motor)', 'Egzozdan kurum atıyor mu bakın', 'AdBlue deposu değişmiş mi sorun']
    },
    {
        id: 'fiat-egea-cross-1-4',
        slug: 'fiat-egea-cross-1-4',
        brand: 'Fiat',
        model: 'Egea',
        variant: 'Cross 1.4 Fire',
        years: '2020-2024',
        generation: 'Tip 356',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 74,
        totalIssues: 6,
        searchCount: 18900,
        issues: [
            { id: 'egea-cross-1', title: 'Tablet Ekran Hayalet Dokunuş', description: '10 inç tablet ekranın kendi kendine basması veya donması.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: 'Ekran Değişimi' },
            { id: 'egea-cross-2', title: 'Krom Detay Soyulması', description: 'Ön panjur ve kapı kollarındaki kromların erken deformasyonu.', category: 'govde', riskLevel: 'LOW', affectedKm: '2-3 Yıl', repairCost: 'Kozmetik' }
        ],
        pros: ['Yüksek sürüş pozisyonu', 'Şık SUV görünümü', 'Dijital gösterge paneli'],
        cons: ['Motor performansı yetersiz', 'Rüzgar sesi (aynalardan)'],
        buyingTips: ['Ekranın dokunmatiğini tüm bölgelerde test edin']
    },
    {
        id: 'fiat-linea-1-3-multijet',
        slug: 'fiat-linea-1-3-multijet',
        brand: 'Fiat',
        model: 'Linea',
        variant: '1.3 MultiJet',
        years: '2007-2017',
        generation: '323',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        reliabilityScore: 82,
        totalIssues: 4,
        searchCount: 8500,
        issues: [
            { id: 'linea-1', title: 'Amortisör Takozu', description: 'Direksiyonu çevirirken gelen "gırç gırç" sesi.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '60.000+ km', repairCost: '2.500 - 5.000 TL' },
            { id: 'linea-2', title: 'EGR Valfi Tıkanması', description: 'Çekiş düşüklüğü ve siyah duman atma.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '5.000 - 10.000 TL' },
            { id: 'linea-3', title: 'Debriyaj Üst Merkezi', description: 'Debriyaj pedalının basılı kalması.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '3.500 - 7.000 TL' }
        ],
        pros: ['Az yakar çok kaçar', 'Parçası bakkalda bile var', 'Geniş bagaj'],
        cons: ['Eskiyen tasarım', 'Yalıtım yetersiz', 'Plastik kalitesi düşük'],
        buyingTips: ['EGR iptali yapılmış mı?', 'Debriyaj pedalını kontrol edin']
    },
    {
        id: 'fiat-doblo-1-6-multijet',
        slug: 'fiat-doblo-1-6-multijet',
        brand: 'Fiat',
        model: 'Doblo',
        variant: '1.6 MultiJet',
        years: '2010-2022',
        generation: 'D4',
        image: 'https://images.unsplash.com/photo-1605218427306-635b2e5971a3?auto=format&fit=crop&q=80',
        reliabilityScore: 85,
        totalIssues: 3,
        searchCount: 9200,
        issues: [
            { id: 'doblo-1', title: 'Arka Amortisör Patlaması', description: 'Yük altında çalışan araçlarda arka süspansiyon zayıflığı.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '6.000 - 12.000 TL' },
            { id: 'doblo-2', title: 'Intercooler Hortumu', description: 'Turbo hortumunun çatlaması sonucu çekiş kaybı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '2.500 - 5.000 TL' }
        ],
        pros: ['Devasa yükleme alanı', 'Güçlü 1.6 motor (105/120hp)', 'Yol tutuş (Bağımsız süspansiyon)'],
        cons: ['Arka süspansiyon sert', 'Rüzgar sesi (Aynalar büyük)'],
        buyingTips: ['Turbo hortumlarında yağ kaçağı var mı?', 'Arka kapı kilitlerini kontrol edin']
    },

    // RENAULT
    {
        id: 'renault-clio-5-1-0-tce',
        slug: 'renault-clio-5-1-0-tce',
        brand: 'Renault',
        model: 'Clio',
        variant: '1.0 TCe',
        years: '2019-2024',
        generation: 'Clio V',
        image: '/cars/renault-megane.png',
        price: 1350000,
        reliabilityScore: 76,
        totalIssues: 5,
        searchCount: 14300,
        issues: [
            { id: 'clio-1', title: 'Turbo Wastegate Sesi', description: 'Gazdan ayağınızı çektiğinizde gelen metalik şıngırtı sesi (Kronik ama zararsız).', category: 'motor', riskLevel: 'LOW', affectedKm: 'Sıfır km\'den itibaren', repairCost: '3.500 TL (Klips) / 12.000 TL Değişim' },
            { id: 'clio-2', title: 'Yakıt Pompası Uğultusu', description: 'Arka koltuk altından gelen yüksek frekanslı ses.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '40.000+ km', repairCost: '8.000 - 16.000 TL' },
            { id: 'clio-3', title: 'Start-Stop Devreye Girmiyor', description: 'Akü voltaj hassasiyeti nedeniyle sistemin çalışmaması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '4.000 - 8.000 TL (Akü)' }
        ],
        pros: ['Modern iç mekan', 'Düşük vergi', 'Seri X-Tronic şanzıman'],
        cons: ['Arka diz mesafesi dar', 'Rüzgar sesi (110+ km/s)'],
        buyingTips: ['Wastegate sesine takılmayın (karakteristik)', 'Multimedya ekranı donuyor mu bakın']
    },
    {
        id: 'renault-megane-4-1-3-tce',
        slug: 'renault-megane-4-1-3-tce',
        brand: 'Renault',
        model: 'Megane',
        variant: '1.3 TCe',
        years: '2016-2023',
        generation: 'Megane IV',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2019_Renault_M%C3%A9gane_RS_300_Trophy_front.jpg/1280px-2019_Renault_M%C3%A9gane_RS_300_Trophy_front.jpg',
        price: 1600000,
        reliabilityScore: 84,
        totalIssues: 3,
        searchCount: 16500,
        issues: [
            { id: 'megane-edc', title: 'EDC Kararsızlığı', description: 'Dur-kalk trafikte 1. ve 2. vites arasında kararsızlık (Özellikle Eco modda).', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yazılım' },
            { id: 'megane-trim', title: 'Trim Sesleri', description: 'C sütunu ve kapı içlerinden gelen plastik sesleri.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: 'İzolasyon' },
            { id: 'megane-link', title: 'Z Rot Sesleri', description: 'Ön takımdan gelen lakırtı.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '40.000+ km', repairCost: '1.500 - 3.000 TL' }
        ],
        pros: ['Çok güçlü motor (140hp Mercedes ortak)', 'Sessiz kabin', 'Şık tasarım'],
        cons: ['EDC şanzıman narinliği', 'Arka süspansiyon torsiyon'],
        buyingTips: ['Yokuş kalkışında titreme var mı bakın', 'EDC vites geçişlerini kontrol edin']
    },
    {
        id: 'renault-symbol-1-5-dci',
        slug: 'renault-symbol-1-5-dci',
        brand: 'Renault',
        model: 'Symbol',
        variant: '1.5 dCi',
        years: '2013-2021',
        generation: 'III',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2013_Renault_Symbol_1.5_dCi_%28front%29.jpg/1280px-2013_Renault_Symbol_1.5_dCi_%28front%29.jpg',
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 7800,
        issues: [
            { id: 'symbol-1', title: 'Turbo Hortum Terlemesi', description: 'Turbo intercooler hortumunda yağ terlemesi (Kronik).', category: 'motor', riskLevel: 'LOW', affectedKm: 'Her km', repairCost: '1.000 - 2.000 TL' },
            { id: 'symbol-2', title: 'Enjektör Şakırtısı', description: 'Kötü yakıt kaynaklı enjektör sesi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '5.000 - 15.000 TL' }
        ],
        pros: ['Yakıt cimrisi', 'Büyük bagaj', 'Ucuz parça'],
        cons: ['Güvenlik zayıf', 'Konfor düşük', 'Yalıtım yok'],
        buyingTips: ['Taksi çıkması mı kontrol edin', 'Motor kapağını açıp yağ kaçaklarına bakın']
    },

    // VOLKSWAGEN
    {
        id: 'volkswagen-passat-b8-1-6-tdi',
        slug: 'volkswagen-passat-b8-1-6-tdi',
        brand: 'Volkswagen',
        model: 'Passat',
        variant: 'B8 1.6 TDI',
        years: '2015-2023',
        generation: 'B8',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 78,
        totalIssues: 6,
        searchCount: 12350,
        issues: [
            { id: 'passat-1', title: 'DSG Volan Sesi', description: 'Çift kütleli volan arızası sonucu rölantide "şak şak" sesi (LUK marka volan kronik).', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '90.000+ km', repairCost: '18.000 - 30.000 TL' },
            { id: 'passat-2', title: 'Su Devirdaim Pompası', description: 'Elektronik devirdaim pompasının kilitlenmesi veya su kaçırması.', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '12.000 - 22.000 TL' },
            { id: 'passat-3', title: 'AdBlue Isıtıcısı', description: 'AdBlue deposundaki ısıtıcı rezistansın bozulması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '18.000 - 28.000 TL' }
        ],
        pros: ['D sınıfı referans konfor', 'Geniş arka yaşam alanı', 'İkinci el altın gibi değerlenir'],
        cons: ['Yüksek bakım maliyeti', 'DSG riskleri', 'Şehir içi sert süspansiyon (Highline)'],
        buyingTips: ['DSG kavramasını yokuşta test edin', 'Volan sesini dinleyin (Stop ederken şıkırtı var mı?)']
    },
    {
        id: 'volkswagen-golf-7-1-4-tsi',
        slug: 'volkswagen-golf-7-1-4-tsi',
        brand: 'Volkswagen',
        model: 'Golf',
        variant: 'Golf 7 1.4 TSI',
        years: '2012-2020',
        generation: 'Mk7',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2018_Volkswagen_Golf_%281K2%29_GTI_5-door_hatchback_%282018-07-30%29_01.jpg/1280px-2018_Volkswagen_Golf_%281K2%29_GTI_5-door_hatchback_%282018-07-30%29_01.jpg',
        reliabilityScore: 82,
        totalIssues: 4,
        searchCount: 11200,
        issues: [
            { id: 'golf-1', title: 'DSG Mekatronik', description: 'Mekatronik güçlendirilmiş tüp gevşemesi veya kart arızası.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '100.000+ km', repairCost: '18.000 - 40.000 TL' },
            { id: 'golf-2', title: 'Devirdaim Kütüğü', description: 'Plastik termostat gövdesinden antifriz kaçağı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '70.000+ km', repairCost: '6.000 - 12.000 TL' },
            { id: 'golf-3', title: 'Kapı Kilit Motoru', description: 'Kapıların kilitlenmemesi veya açılmaması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '3.500 - 7.000 TL' }
        ],
        pros: ['Kalite hissi', 'Sessizlik', 'Ergonomi'],
        cons: ['DSG korkusu', 'Pahalı yetkili servis'],
        buyingTips: ['Şanzıman kartı değişmiş mi sorun', 'Yedek su deposunu kontrol edin']
    },
    {
        id: 'volkswagen-tiguan-1-5-tsi',
        slug: 'volkswagen-tiguan-1-5-tsi',
        brand: 'Volkswagen',
        model: 'Tiguan',
        variant: '1.5 TSI',
        years: '2016-2023',
        generation: 'Mk2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2019_Volkswagen_Tiguan_SEL_2.0_Front.jpg/1280px-2019_Volkswagen_Tiguan_SEL_2.0_Front.jpg',
        reliabilityScore: 80,
        totalIssues: 3,
        searchCount: 9800,
        issues: [
            { id: 'tiguan-1', title: 'Kangaroo Effect (Silkeleme)', description: 'Soğuk motorda ilk kalkışta aracın ileri geri silkelemesi (1.5 TSI Evo kronik).', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '0-30.000 km', repairCost: 'Yazılım Güncelleme' },
            { id: 'tiguan-2', title: 'Cam Tavan Sesi', description: 'Sunroof fitillerinden ve mekanizmasından gelen gıcırtı.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: 'Bakım/Yağlama' }
        ],
        pros: ['Geniş iç hacim', 'Güçlü 150hp motor', 'Güvenlik (Euro NCAP 5)'],
        cons: ['Yüksek yakıt tüketimi (9-10LT)', 'Sert süspansiyon'],
        buyingTips: ['Soğuk motorla test sürüşü yapın (silkeleme için)', 'Cam tavanı açıp kapatın']
    },

    // HONDA
    {
        id: 'honda-civic-fc5-1-6-vtec',
        slug: 'honda-civic-fc5-1-6-vtec',
        brand: 'Honda',
        model: 'Civic',
        variant: 'FC5 1.6 i-VTEC',
        years: '2016-2021',
        generation: 'FC5',
        image: '/cars/honda-civic.png',
        reliabilityScore: 85,
        totalIssues: 4,
        searchCount: 18200,
        issues: [
            { id: 'civic-1', title: 'C Sütunu Göçüğü', description: 'Arka C sütununda dalgalanma şeklinde göçük oluşumu (Makyajsız kasalarda yaygın).', category: 'govde', riskLevel: 'MEDIUM', affectedKm: 'Kronik', repairCost: '5.000 - 12.000 TL (Düzeltme)' },
            { id: 'civic-2', title: 'Direksiyon Kutusu Sesi', description: 'Direksiyon sağa sola çevrildiğinde gelen "tak tak" sesi.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '50.000+ km', repairCost: '22.000 - 38.000 TL' },
            { id: 'civic-3', title: 'Benzin Pompası', description: 'Denso yakıt pompası geri çağırma bülteni (Aracın stop etmesi).', category: 'motor', riskLevel: 'HIGH', affectedKm: 'Rastgele', repairCost: 'Ücretsiz (Servis)' }
        ],
        pros: ['LPG tam uyumu', 'İkinci el piyasası çok hızlı', 'Geniş iç hacim'],
        cons: ['Yalıtım zayıf (Yol sesi)', 'Kaporta sacı ince', 'CVT şanzıman hissizliği'],
        buyingTips: ['C sütununu elinizle kontrol edin', 'Direksiyon kutusundan ses geliyor mu?', 'Yakıt pompası değişimi yapılmış mı?']
    },

    // TOYOTA
    {
        id: 'toyota-corolla-hybrid',
        slug: 'toyota-corolla-hybrid',
        brand: 'Toyota',
        model: 'Corolla',
        variant: '1.8 Hybrid',
        years: '2019-2024',
        generation: 'E210',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2019_Toyota_Corolla_Hybrid_Design_1.8.jpg/1280px-2019_Toyota_Corolla_Hybrid_Design_1.8.jpg',
        price: 1800000,
        reliabilityScore: 92,
        totalIssues: 2,
        searchCount: 11200,
        issues: [
            { id: 'corolla-1', title: 'Fren Vakum Pompası Sesi', description: 'Frene basınca veya geri giderken gelen vakum sesi.', category: 'fren', riskLevel: 'LOW', affectedKm: 'Her km', repairCost: '0 - 1.000 TL' },
            { id: 'corolla-2', title: 'Hibrit Pil Filtresi', description: 'Arka koltuk altındaki hava giriş filtresinin tıkanması performansı düşürür.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Yılda bir', repairCost: 'Temizlik' }
        ],
        pros: ['Şehir içi yakıt (3-4 LT)', 'Sorunsuz e-CVT', 'Sessiz sürüş'],
        cons: ['Motor sesi (Dip gazda)', 'Arka tavan basık', 'Multimedya grafikleri eski'],
        buyingTips: ['Hibrit pil sağlık testi raporu isteyin (Yetkili servisten)', 'Lastik yanaklarında balon var mı?']
    },
    {
        id: 'toyota-chr-1-8-hybrid',
        slug: 'toyota-chr-1-8-hybrid',
        brand: 'Toyota',
        model: 'C-HR',
        variant: '1.8 Hybrid',
        years: '2016-2023',
        generation: 'AX10',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2020_Toyota_C-HR_Hybrid_Design_1.8_Front.jpg/1280px-2020_Toyota_C-HR_Hybrid_Design_1.8_Front.jpg',
        reliabilityScore: 90,
        totalIssues: 2,
        searchCount: 6500,
        issues: [
            { id: 'chr-1', title: 'Ön Cam Çatlaması', description: 'Kasa esnemesi kaynaklı ön camın sağ üst köşeden kendiliğinden çatlaması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '22.000 - 35.000 TL' },
            { id: 'chr-2', title: 'Akü Bitmesi', description: 'Uzun süre binmeyince 12V aküsünün bitmesi (Hibrit araçlarda yaygın).', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '4.000 - 8.000 TL (Akü)' }
        ],
        pros: ['Fütüristik tasarım', 'Ekonomik', 'Yüksek sürüş keyfi (Bağımsız süspansiyon)'],
        cons: ['Arka camlar klostrofobik', 'Bagaj küçük', 'Kör nokta çok'],
        buyingTips: ['Ön camda çatlak veya değişim var mı?', 'Arka koltuk ferahlığını test edin']
    },

    // FORD
    {
        id: 'ford-focus-1-5-ti-vct',
        slug: 'ford-focus-1-5-ti-vct',
        brand: 'Ford',
        model: 'Focus',
        variant: '1.5 Ti-VCT',
        years: '2018-2024',
        generation: 'Mk4',
        image: 'https://images.unsplash.com/photo-1551830463-6e8633398c76?auto=format&fit=crop&q=80',
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 8900,
        issues: [
            { id: 'focus-1', title: 'Tork Konvertör Sesi', description: '6 ileri otomatik şanzımanda düşük hızlarda uğultu/vuruntu.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '30.000 - 55.000 TL' },
            { id: 'focus-2', title: 'Akü Sensörü', description: 'Start-stop devre dışı kalması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Sınıf lideri yol tutuş', 'Sessiz kabin', 'LPG uyumu (Tam otomatik)'],
        cons: ['Yakıt tüketimi yüksek (10L)', 'Atmosferik motor performansı zayıf'],
        buyingTips: ['Şanzıman geçişlerini kontrol edin (vuruntu var mı)']
    },
    {
        id: 'ford-tourneo-courier-1-5-tdci',
        slug: 'ford-tourneo-courier-1-5-tdci',
        brand: 'Ford',
        model: 'Courier',
        variant: '1.5 TDCi',
        years: '2014-2023',
        generation: 'B460',
        image: 'https://images.unsplash.com/photo-1551830463-6e8633398c76?auto=format&fit=crop&q=80',
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            { id: 'courier-1', title: 'AdBlue Isıtıcı', description: 'AdBlue deposu ısıtıcı rezistans arızası (Kışın donma kaynaklı).', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '8.000 - 15.000 TL' },
            { id: 'courier-2', title: 'Turbo Hortumu', description: 'Turbo hortumunun patlaması ve çekiş kaybı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Otomobil gibi sürüş', 'Ekonomik', 'Güçlü 100hp motor'],
        cons: ['Arka süspansiyon sert (Makaslı değil ama sert)', 'Ticari hız sınırı'],
        buyingTips: ['AdBlue sistemini kontrol edin', 'Debriyaj durumuna bakın (Ticari kullanım)']
    },

    // PEUGEOT
    {
        id: 'peugeot-2008-1-2-puretech',
        slug: 'peugeot-2008-1-2-puretech',
        brand: 'Peugeot',
        model: '2008',
        variant: '1.2 PureTech',
        years: '2020-2024',
        generation: 'P24',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        reliabilityScore: 80,
        totalIssues: 3,
        searchCount: 11000,
        issues: [
            { id: '2008-1', title: 'Triger Kayışı (Wet Belt)', description: 'Yağ içinde çalışan triger kayışının zamanla parçalanıp yağ süzgecini tıkaması (Hayati Risk).', category: 'motor', riskLevel: 'HIGH', affectedKm: '50.000+ km / 4 Yıl', repairCost: '20.000 - 35.000 TL' },
            { id: '2008-2', title: 'Yağ Eksiltme', description: 'Segman kurumlanması nedeniyle yağ tüketimi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '10.000 - 20.000 TL' }
        ],
        pros: ['Harika tasarım', 'i-Cockpit', 'EAT8 tam otomatik şanzıman'],
        cons: ['Triger kayışı parçalanma riski', 'Küçük direksiyon göstergeyi kapatabiliyor'],
        buyingTips: ['Triger kayışı değişimi yapılmış mı? (40.000 de olsa bile)', 'Yağ basıncı uyarısı geçmişine bakın']
    },
    {
        id: 'peugeot-3008-1-5-bluehdi',
        slug: 'peugeot-3008-1-5-bluehdi',
        brand: 'Peugeot',
        model: '3008',
        variant: '1.5 BlueHDi',
        years: '2016-2023',
        generation: 'P84',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 13500,
        issues: [
            { id: '3008-1', title: 'AdBlue Tankı', description: 'AdBlue tankı deformasyonu ve pompa arızası (Kronik).', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '28.000 - 45.000 TL' },
            { id: '3008-2', title: 'Eksantrik Zinciri', description: '7mm eksantrik zincirinin kopması (2020 sonrası 8mm ile revize edildi).', category: 'motor', riskLevel: 'HIGH', affectedKm: '40.000 - 100.000 km', repairCost: '80.000 - 120.000 TL (Motor İner)' }
        ],
        pros: ['Premium iç mekan', 'Konfor', 'Düşük tüketim'],
        cons: ['AdBlue ve Zincir riskleri', 'İkinci elde değer kaybı (Zincir korkusu)'],
        buyingTips: ['Eksantrik zinciri 8mm revize edilmiş mi?', 'AdBlue iptali var mı bakın']
    },

    // HYUNDAI
    {
        id: 'hyundai-i20-1-4-jump',
        slug: 'hyundai-i20-1-4-jump',
        brand: 'Hyundai',
        model: 'i20',
        variant: '1.4 Jump',
        years: '2020-2024',
        generation: 'BC3',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c698d9?auto=format&fit=crop&q=80',
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 9500,
        issues: [
            { id: 'i20-1', title: 'Direksiyon Sesi', description: 'Direksiyon kutusu burçlarından gelen tıkırtı.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '30.000+ km', repairCost: '8.000 - 15.000 TL' },
            { id: 'i20-2', title: 'Boya Problemi', description: 'Beyaz renkli araçlarda tavanda boya atması (Vernik soyulması).', category: 'govde', riskLevel: 'LOW', affectedKm: '2-3 Yıl', repairCost: '5.000 - 12.000 TL (Boya/Kaplama)' }
        ],
        pros: ['Sorunsuz tam otomatik şanzıman', 'Geniş iç hacim', 'Donanım'],
        cons: ['Yakıt tüketimi (Şehir içi 9-10LT)', 'Sert plastikler'],
        buyingTips: ['Tavanda boya atması var mı?', 'Direksiyonu bozuk yolda dinleyin']
    },
    {
        id: 'hyundai-tucson-1-6-t-gdi',
        slug: 'hyundai-tucson-1-6-t-gdi',
        brand: 'Hyundai',
        model: 'Tucson',
        variant: '1.6 T-GDI',
        years: '2021-2024',
        generation: 'NX4',
        image: 'https://images.unsplash.com/photo-1583121274602-3e2820c698d9?auto=format&fit=crop&q=80',
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 11000,
        issues: [
            { id: 'tucson-1', title: 'GPF Tıkanması', description: 'Şehir içi kullanımda Benzin Partikül Filtresi uyarısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: 'Şehir içi kullanım', repairCost: 'Serviste Rejenerasyon' },
            { id: 'tucson-2', title: 'Multimedya Reset', description: 'Ekranın sürüş esnasında kapanıp açılması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Fütüristik tasarım', 'Zengin donanım', 'Performans (180hp)'],
        cons: ['Yüksek yakıt tüketimi', 'Pianoblack yüzeyler çiziliyor'],
        buyingTips: ['GPF uyarısı alıyor mu sorun', 'Cam tavan fitillerini kontrol edin']
    },

    // DACIA
    {
        id: 'dacia-duster-1-3-tce',
        slug: 'dacia-duster-1-3-tce',
        brand: 'Dacia',
        model: 'Duster',
        variant: '1.3 TCe',
        years: '2018-2024',
        generation: 'HM',
        image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        price: 1450000,
        reliabilityScore: 81,
        totalIssues: 3,
        searchCount: 15100,
        issues: [
            { id: 'duster-1', title: 'Diferansiyel Ötmesi', description: '4x4 modellerde 90-110 km/s hızlarda gelen uğultu.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '20.000+ km', repairCost: '22.000 - 40.000 TL' },
            { id: 'duster-2', title: 'Yakıt Şamandırası', description: 'Depo ful olsa bile ibrenin eksik göstermesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '3.500 - 7.000 TL' },
            { id: 'duster-3', title: 'Klima Kompresör Sesi', description: 'Klima açıldığında motordan gelen inleme sesi.', category: 'motor', riskLevel: 'LOW', affectedKm: 'Sıfırdan itibaren', repairCost: '12.000 - 22.000 TL (Değişim)' }
        ],
        pros: ['Gerçek arazi yeteneği', 'Mercedes ortak motor (1.3 TCe)', 'Dayanıklı'],
        cons: ['Güvenlik zayıf (NCAP)', 'Yalıtım kötü', 'Koltuk konforu'],
        buyingTips: ['Arazide hor kullanılmış mı bakın', 'Diferansiyel sesini 100km hızda dinleyin']
    },

    // OPEL
    {
        id: 'opel-corsa-1-2-turbo',
        slug: 'opel-corsa-1-2-turbo',
        brand: 'Opel',
        model: 'Corsa',
        variant: '1.2 Turbo',
        years: '2019-2024',
        generation: 'Corsa F',
        image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80',
        reliabilityScore: 79,
        totalIssues: 2,
        searchCount: 8800,
        issues: [
            { id: 'corsa-1', title: 'Triger Kayışı (Wet Belt)', description: 'PSA grubu motoru kaynaklı triger kayışının yağda çözünmesi.', category: 'motor', riskLevel: 'HIGH', affectedKm: '50.000+ km', repairCost: '28.000 - 45.000 TL' },
            { id: 'corsa-2', title: 'Yağ Eksiltme', description: '1.2 Turbo motorlarda yağ tüketimi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '70.000+ km', repairCost: '35.000 - 60.000 TL (Revizyon)' }
        ],
        pros: ['Sportif sürüş', 'EAT8 (Sorunsuz otomatik)', 'Donanım (Matrix LED)'],
        cons: ['Arka yaşam alanı dar', 'Triger riski'],
        buyingTips: ['Triger kontrolü yaptırın (Motor kapağından görünebilir)', '130hp olanı tercih edin']
    },

    // NISSAN
    {
        id: 'nissan-qashqai-1-3-dig-t',
        slug: 'nissan-qashqai-1-3-dig-t',
        brand: 'Nissan',
        model: 'Qashqai',
        variant: '1.3 DIG-T',
        years: '2021-2024',
        generation: 'J12',
        image: 'https://images.unsplash.com/photo-1621995133606-d509f6e5223c?auto=format&fit=crop&q=80',
        price: 1700000,
        reliabilityScore: 83,
        totalIssues: 1,
        searchCount: 9700,
        issues: [
            { id: 'qashqai-1', title: 'Mild Hybrid Akü', description: 'Akü arızası nedeniyle "Hibrit Sistem Hatası" vermesi.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: '20.000+ km', repairCost: '8.000 - 16.000 TL' }
        ],
        pros: ['Konforlu süspansiyon', 'Geniş iç mekan', 'Güvenlik donanımı'],
        cons: ['CVT şanzıman hissizliği', 'Multimedya arayüzü'],
        buyingTips: ['Akü voltajını ölçtürün', 'Kaput titremesi var mı bakın (Yüksek hızda)']
    },
    {
        id: 'volkswagen-troc-1-5-tsi',
        slug: 'volkswagen-troc-1-5-tsi',
        brand: 'Volkswagen',
        model: 'T-Roc',
        variant: '1.5 TSI',
        years: '2019-2024',
        generation: 'Mk1',
        image: '/cars/volkswagen-troc.png',
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 9500,
        issues: [
            { id: 'troc-1', title: 'Kangaroo Effect', description: 'Soğuk motorda ilk kalkışta silkeleme (1.5 TSI kronik).', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '0-30.000 km', repairCost: '2.000 - 5.000 TL (Yazılım)' },
            { id: 'troc-2', title: 'Start-Stop Hatası', description: 'Start-stop sisteminin devreye girmemesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: '30.000+ km', repairCost: '2.500 - 5.000 TL' }
        ],
        pros: ['Şık tasarım', 'Yüksek sürüş pozisyonu', 'Performans'],
        cons: ['Malzeme kalitesi (Polo ile aynı)', 'Arka diz mesafesi'],
        buyingTips: ['Kangaroo efektini test edin (Soğuk motor)']
    },
    {
        id: 'fiat-fiorino-1-3-multijet',
        slug: 'fiat-fiorino-1-3-multijet',
        brand: 'Fiat',
        model: 'Fiorino',
        variant: '1.3 MultiJet',
        years: '2008-2024',
        generation: 'Mk3',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            { id: 'fiorino-1', title: 'Amortisör Kulesi', description: 'Ön amortisör kule bilyalarının ses yapması.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '50.000+ km', repairCost: '3.500 - 7.000 TL' },
            { id: 'fiorino-2', title: 'Zincir Sesi', description: 'Yüksek kilometrede triger zincir sesi.', category: 'motor', riskLevel: 'HIGH', affectedKm: '150.000+ km', repairCost: '5.000 - 10.000 TL' }
        ],
        pros: ['Şehir içi pratiklik', 'Yakıt cimrisi', 'Parça ucuzluğu'],
        cons: ['Konfor zayıf', 'Yalıtım yok', 'Güvenlik'],
        buyingTips: ['Ticari geçmişi var mı?', 'Zincir değişmiş mi?']
    },
    {
        id: 'renault-clio-4-1-5-dci',
        slug: 'renault-clio-4-1-5-dci',
        brand: 'Renault',
        model: 'Clio',
        variant: 'Clio 4 1.5 dCi',
        years: '2012-2019',
        generation: 'IV',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2019_Renault_Clio_Iconic_TCe_Automatic_1.3_Front.jpg/1280px-2019_Renault_Clio_Iconic_TCe_Automatic_1.3_Front.jpg',
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 13000,
        issues: [
            { id: 'clio4-1', title: 'Rüzgar Sesi', description: 'Aynalardan ve kelebek camından rüzgar sesi.', category: 'govde', riskLevel: 'LOW', affectedKm: '90 km/s+', repairCost: 'Fitil Değişimi' },
            { id: 'clio4-2', title: 'EDC Beyni', description: 'Şanzıman kartı arızası.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '100.000+ km', repairCost: '15.000 - 25.000 TL' }
        ],
        pros: ['Tasarım', 'Yakıt tüketimi', 'İkinci el'],
        cons: ['İç mekan kalitesi', 'Arka camlar manuel'],
        buyingTips: ['EDC vites geçişlerini kontrol edin', 'Rüzgar sesini dinleyin']
    },
    {
        id: 'renault-taliant-1-0-turbo',
        slug: 'renault-taliant-1-0-turbo',
        brand: 'Renault',
        model: 'Taliant',
        variant: '1.0 Turbo',
        years: '2021-2024',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2019_Renault_Clio_Iconic_TCe_Automatic_1.3_Front.jpg/1280px-2019_Renault_Clio_Iconic_TCe_Automatic_1.3_Front.jpg',
        reliabilityScore: 79,
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            { id: 'taliant-1', title: 'CVT Isınması', description: 'Uzun süreli yokuşlarda şanzıman ısınma uyarısı.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: 'Ağır şartlar', repairCost: 'Kullanıma bağlı' }
        ],
        pros: ['Geniş bagaj', 'LPG uyumlu motor', 'Modern görünüm'],
        cons: ['Dacia altyapısı', 'Malzeme kalitesi'],
        buyingTips: ['CVT şanzımanı yokuşta deneyin']
    },
    {
        id: 'renault-captur-1-3-tce',
        slug: 'renault-captur-1-3-tce',
        brand: 'Renault',
        model: 'Captur',
        variant: '1.3 TCe',
        years: '2020-2024',
        generation: 'II',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2019_Renault_Clio_Iconic_TCe_Automatic_1.3_Front.jpg/1280px-2019_Renault_Clio_Iconic_TCe_Automatic_1.3_Front.jpg',
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            { id: 'captur-1', title: 'EDC Kararsızlığı', description: 'Düşük hızlarda kararsızlık.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: '2.500 - 6.000 TL (Yazılım)' },
            { id: 'captur-2', title: 'Multimedya Donması', description: 'Ekran kararması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '1.500 - 4.000 TL (Yazılım)' }
        ],
        pros: ['Kayar arka koltuklar', 'Güçlü motor', 'Kişiselleştirme'],
        cons: ['Süspansiyon sert', 'Yalıtım'],
        buyingTips: ['Start-stop çalışıyor mu?', 'Vites geçişleri sarsıntılı mı?']
    },
    {
        id: 'renault-austral-1-3-tce',
        slug: 'renault-austral-1-3-tce',
        brand: 'Renault',
        model: 'Austral',
        variant: '1.3 TCe Mild Hybrid',
        years: '2022-2024',
        generation: 'I',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2019_Renault_M%C3%A9gane_RS_300_Trophy_front.jpg/1280px-2019_Renault_M%C3%A9gane_RS_300_Trophy_front.jpg',
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            { id: 'austral-1', title: 'Ekran Donması', description: 'OpenR Link ekran donması.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: '2.000 - 5.000 TL (Güncelleme)' },
            { id: 'austral-2', title: 'Trim Sesi', description: 'Konsol trim sesleri.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Sıfırdan itibaren', repairCost: '1.000 - 3.000 TL (İzolasyon)' }
        ],
        pros: ['Google işletim sistemi', 'Arka koltuk diz mesafesi', '4Control'],
        cons: ['Sert sürüş', 'Trim sesleri'],
        buyingTips: ['Ekranı kurcalayın donma var mı?', '4Control sistemini test edin']
    },
    {
        id: 'volkswagen-golf-8-1-0-etsi',
        slug: 'volkswagen-golf-8-1-0-etsi',
        brand: 'Volkswagen',
        model: 'Golf',
        variant: 'Golf 8 1.0 eTSI',
        years: '2020-2024',
        generation: 'Mk8',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
        reliabilityScore: 79,
        totalIssues: 3,
        searchCount: 11000,
        issues: [
            { id: 'golf8-1', title: 'Yazılım Hataları', description: 'Multimedya ve asistan sistemlerinin hata vermesi (SOS hatası).', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: 'Yazılım Güncelleme' },
            { id: 'golf8-2', title: 'Dokunmatik Tepkisi', description: 'Klima ve ses tuşlarının geç tepki vermesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Çözümsüz' },
            { id: 'golf8-3', title: 'DSG Sarsıntı', description: 'Hibrit geçişlerinde hafif sarsıntı.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yok' }
        ],
        pros: ['Sürüş teknolojileri', 'Sessizlik', 'Yakıt tüketimi (Mild Hybrid)'],
        cons: ['Karmaşık dokunmatik kontroller', 'Malzeme kalitesi düşüşü (Mk7\'ye göre)'],
        buyingTips: ['SOS hatası var mı?', 'Dokunmatik paneli test edin']
    },
    {
        id: 'volkswagen-polo-1-0-tsi',
        slug: 'volkswagen-polo-1-0-tsi',
        brand: 'Volkswagen',
        model: 'Polo',
        variant: '1.0 TSI',
        years: '2017-2024',
        generation: 'Mk6',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 10500,
        issues: [
            { id: 'polo-1', title: 'DSG Kavrama', description: 'Kuru kavrama şanzımanın ısınması ve titremesi.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '20.000 - 35.000 TL' },
            { id: 'polo-2', title: 'El Freni Tabancası', description: 'Mekanik el freni düğmesinin kırılması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '800 - 1.500 TL' }
        ],
        pros: ['Sınıf lideri genişlik', 'Konfor', 'İkinci el'],
        cons: ['Donanım fakiri (Life paket boş)', 'DSG riski'],
        buyingTips: ['DSG vites geçişlerini kontrol edin', 'Triger kayışı kontrolü']
    },
    {
        id: 'volkswagen-caddy-2-0-tdi',
        slug: 'volkswagen-caddy-2-0-tdi',
        brand: 'Volkswagen',
        model: 'Caddy',
        variant: '2.0 TDI',
        years: '2020-2024',
        generation: 'Mk5',
        image: 'https://images.unsplash.com/photo-1605218427306-635b2e5971a3?auto=format&fit=crop&q=80',
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 8800,
        issues: [
            { id: 'caddy-1', title: 'AdBlue Sistemi', description: 'AdBlue dozajlama hatası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '50.000+ km', repairCost: '18.000 - 30.000 TL' },
            { id: 'caddy-2', title: 'Arka Amortisör', description: 'Yaysız (helezon) yeni sistemin ses yapması.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '20.000+ km', repairCost: '4.000 - 8.000 TL' }
        ],
        pros: ['Otomobil konforu', 'Cam tavan ferahlığı', 'Güçlü motor (122hp)'],
        cons: ['Yüksek fiyat', 'Yılda bir muayene (Ticari)'],
        buyingTips: ['AdBlue hatası var mı?', 'Süspansiyon sesini dinleyin']
    },
    {
        id: 'honda-civic-fe1-1-5-turbo',
        slug: 'honda-civic-fe1-1-5-turbo',
        brand: 'Honda',
        model: 'Civic',
        variant: 'FE1 1.5 Turbo',
        years: '2021-2024',
        generation: 'FE1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2017_Honda_Civic_sedan_2.0_VTi-S_%28facelift%3B_Indonesia%29_front_view.jpg/1280px-2017_Honda_Civic_sedan_2.0_VTi-S_%28facelift%3B_Indonesia%29_front_view.jpg',
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 16000,
        issues: [
            { id: 'fe1-1', title: 'Direksiyon Sesi', description: 'Düşük hızlarda manevra yaparken direksiyon kutusundan gelen tıkırtı (Garantiden değişim).', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '10.000+ km', repairCost: 'Garantiden' }
        ],
        pros: ['Mükemmel yol tutuş', 'Güçlü motor (182hp)', 'Kaliteli iç mekan'],
        cons: ['Yalıtım (Hala sınıfının gerisinde)', 'Yakıt tüketimi (Performanslı kullanımda 10L+)'],
        buyingTips: ['Direksiyonu tam tur çevirip dinleyin', 'Boya kalınlığına baktırın (İnce boya)']
    },
    {
        id: 'honda-city-1-5-i-vtec',
        slug: 'honda-city-1-5-i-vtec',
        brand: 'Honda',
        model: 'City',
        variant: '1.5 i-VTEC',
        years: '2021-2024',
        generation: 'GN',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2017_Honda_Civic_sedan_2.0_VTi-S_%28facelift%3B_Indonesia%29_front_view.jpg/1280px-2017_Honda_Civic_sedan_2.0_VTi-S_%28facelift%3B_Indonesia%29_front_view.jpg',
        reliabilityScore: 90,
        totalIssues: 2,
        searchCount: 7500,
        issues: [
            { id: 'city-1', title: 'Yalıtım Zayıflığı', description: 'Yol, rüzgar ve lastik sesini içeriye çok alması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'İzolasyon' },
            { id: 'city-2', title: 'Multimedya', description: 'Ekranın yavaş çalışması ve donması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Geniş iç hacim', 'Sorunsuz atmosferik motor', 'Yakıt ekonomisi'],
        cons: ['Malzeme kalitesi düşük (Sert plastik)', 'Yalıtım çok zayıf'],
        buyingTips: ['Otoban sürüşü yapıp yalıtımı test edin']
    },
    {
        id: 'honda-crv-hybrid',
        slug: 'honda-crv-hybrid',
        brand: 'Honda',
        model: 'CR-V',
        variant: '2.0 Hybrid',
        years: '2019-2023',
        generation: 'Mk5',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/2017_Honda_Civic_sedan_2.0_VTi-S_%28facelift%3B_Indonesia%29_front_view.jpg/1280px-2017_Honda_Civic_sedan_2.0_VTi-S_%28facelift%3B_Indonesia%29_front_view.jpg',
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 6200,
        issues: [
            { id: 'crv-1', title: 'Benzin Karışması', description: 'Soğuk iklimlerde kısa mesafe sürüşlerinde kartere benzin karışması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: 'Kısa mesafe', repairCost: 'Yağ değişimi' }
        ],
        pros: ['Devasa iç hacim', 'Konfor', 'i-MMD Hibrit sistemi (Sorunsuz)'],
        cons: ['CVT şanzıman uğultusu', 'Multimedya ekranı çok demode'],
        buyingTips: ['Yağ çubuğunu koklayın (Benzin kokusu)']
    },
    {
        id: 'toyota-corolla-1-5-vision',
        slug: 'toyota-corolla-1-5-vision',
        brand: 'Toyota',
        model: 'Corolla',
        variant: '1.5 Vision',
        years: '2020-2024',
        generation: 'E210',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 93,
        totalIssues: 1,
        searchCount: 14000,
        issues: [
            { id: 'vision-1', title: 'Motor Sesi', description: '3 silindirli motorun gürültülü ve titreşimli çalışması.', category: 'motor', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yok' }
        ],
        pros: ['Sorunsuzluk', 'İkinci el', 'Konfor'],
        cons: ['Performans zayıf (3 silindir)', 'Motor sesi kabine giriyor'],
        buyingTips: ['Filo çıkması mı kontrol edin', 'Titreşimi hissetmeye çalışın']
    },
    {
        id: 'toyota-yaris-hybrid',
        slug: 'toyota-yaris-hybrid',
        brand: 'Toyota',
        model: 'Yaris',
        variant: '1.5 Hybrid',
        years: '2020-2024',
        generation: 'XP210',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 94,
        totalIssues: 1,
        searchCount: 7000,
        issues: [
            { id: 'yaris-1', title: 'Arka Kapı Fitili', description: 'Arka kapı fitillerinin rüzgar sesi yapması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Fabrikasyon', repairCost: 'Fitil Ayarı' }
        ],
        pros: ['Şehir içi yakıt (3LT)', 'Güvenlik (Orta hava yastığı)', 'Park kolaylığı'],
        cons: ['Arka alan çok dar', 'Bagaj küçük'],
        buyingTips: ['Arka kapı fitil boşluğunu kontrol edin']
    },
    {
        id: 'toyota-corolla-cross-hybrid',
        slug: 'toyota-corolla-cross-hybrid',
        brand: 'Toyota',
        model: 'Corolla Cross',
        variant: '1.8 Hybrid',
        years: '2022-2024',
        generation: 'XG10',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 6800,
        issues: [
            { id: 'ccross-1', title: 'Egzoz Susturucusu', description: 'Arka alt kısımdan egzoz kazanının çok aşağıda görünmesi (Kozmetik).', category: 'govde', riskLevel: 'LOW', affectedKm: 'Fabrikasyon', repairCost: 'Boyama' }
        ],
        pros: ['SUV konforu', 'Hibrit verimliliği', 'Geniş camlar'],
        cons: ['Malzeme kalitesi (sert plastik)', 'Egzoz görüntüsü'],
        buyingTips: ['Lastik basınç sensörlerini kontrol edin']
    },
    {
        id: 'hyundai-i10-1-2-mpi',
        slug: 'hyundai-i10-1-2-mpi',
        brand: 'Hyundai',
        model: 'i10',
        variant: '1.2 MPI',
        years: '2020-2024',
        generation: 'AC3',
        image: '/cars/hyundai-i20.png',
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            { id: 'i10-1', title: 'AMT Şanzıman', description: 'Yarı otomatik şanzımanın sarsıntılı vites geçişleri.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yok' },
            { id: 'i10-2', title: 'Direksiyon Sesi', description: 'Direksiyon kolonundan gelen tıkırtı.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '30.000+ km', repairCost: 'Garantiden' }
        ],
        pros: ['Park kolaylığı', 'Sorunsuz motor', 'Zengin donanım (Elite)'],
        cons: ['AMT şanzıman konforu', 'Bagaj'],
        buyingTips: ['Yokuş kalkışını deneyin', 'Direksiyonu dinleyin']
    },
    {
        id: 'hyundai-bayon-1-4-mpi',
        slug: 'hyundai-bayon-1-4-mpi',
        brand: 'Hyundai',
        model: 'Bayon',
        variant: '1.4 MPI',
        years: '2021-2024',
        generation: 'BC3 CUV',
        image: '/cars/hyundai-i20.png',
        reliabilityScore: 87,
        totalIssues: 1,
        searchCount: 8500,
        issues: [
            { id: 'bayon-1', title: 'Yakıt Tüketimi', description: 'Atmosferik motorun şehir içi yüksek tüketimi (9-10 lt).', category: 'motor', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'LPG Takılabilir' }
        ],
        pros: ['Fiyat/Performans', 'Geniş iç hacim', 'Tam otomatik şanzıman'],
        cons: ['Performans zayıf', 'Plastik kalitesi'],
        buyingTips: ['LPG takılıysa sistemini kontrol edin']
    },
    {
        id: 'hyundai-elantra-1-6-mpi',
        slug: 'hyundai-elantra-1-6-mpi',
        brand: 'Hyundai',
        model: 'Elantra',
        variant: '1.6 MPI',
        years: '2021-2024',
        generation: 'CN7',
        image: '/cars/hyundai-elantra.png',
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 5500,
        issues: [
            { id: 'elantra-1', title: 'Direksiyon Sesi', description: 'Direksiyon milinden gelen sürtünme sesi.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yağlama' },
            { id: 'elantra-2', title: 'CVT Sesi', description: 'Yüksek devirde şanzıman uğultusu.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yok' }
        ],
        pros: ['Cesur tasarım', 'Geniş iç mekan', 'Sorunsuzluk'],
        cons: ['Bagaj ağzı dar', 'CVT bağırması'],
        buyingTips: ['Direksiyonu tam tur çevirip dinleyin']
    },
    {
        id: 'ford-fiesta-1-0-ecoboost',
        slug: 'ford-fiesta-1-0-ecoboost',
        brand: 'Ford',
        model: 'Fiesta',
        variant: '1.0 EcoBoost',
        years: '2017-2023',
        generation: 'Mk8',
        image: '/cars/ford-focus.png',
        reliabilityScore: 81,
        totalIssues: 1,
        searchCount: 6000,
        issues: [
            { id: 'fiesta-1', title: 'Triger Kayışı', description: 'Yağlı triger (Wet belt) sisteminin erken deformasyonu.', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '15.000 - 25.000 TL' }
        ],
        pros: ['Sınıfının en iyi yol tutuşu', 'Sessizlik', 'Torklu motor'],
        cons: ['Arka yaşam alanı', 'Üretimi durdu'],
        buyingTips: ['Triger kayışı değişti mi?', 'Su eksiltme var mı?']
    },
    {
        id: 'ford-puma-1-0-ecoboost',
        slug: 'ford-puma-1-0-ecoboost',
        brand: 'Ford',
        model: 'Puma',
        variant: '1.0 EcoBoost',
        years: '2020-2024',
        generation: 'Mk1',
        image: '/cars/ford-focus.png',
        reliabilityScore: 83,
        totalIssues: 2,
        searchCount: 8800,
        issues: [
            { id: 'puma-1', title: 'Akü Deşarjı', description: 'Uzun süre bekleyince hibrit aküsünün bitmesi.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: 'Servis kontrolü' },
            { id: 'puma-2', title: 'MegaBox Su Alma', description: 'Bagaj havuzunun su alması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Fitil' }
        ],
        pros: ['Bagaj çözümü (MegaBox)', 'Tasarım', 'Sürüş keyfi'],
        cons: ['Arka taraf dar', 'Fiyat'],
        buyingTips: ['MegaBox içine bakın su izi var mı?']
    },
    {
        id: 'ford-kuga-1-5-ecoblue',
        slug: 'ford-kuga-1-5-ecoblue',
        brand: 'Ford',
        model: 'Kuga',
        variant: '1.5 EcoBlue',
        years: '2020-2024',
        generation: 'Mk3',
        image: '/cars/ford-kuga.png',
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 9000,
        issues: [
            { id: 'kuga-1', title: 'Kapı Fitilleri', description: 'Fitillerin yerinden çıkması.', category: 'govde', riskLevel: 'LOW', affectedKm: '20.000+ km', repairCost: '500 TL' },
            { id: 'kuga-2', title: 'Vites Seçici', description: 'Döner vites kumandasının tutukluk yapması.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: 'Garantiden' }
        ],
        pros: ['Sessiz dizel motor', 'Kayar arka koltuk', 'Konfor'],
        cons: ['Yakıt tüketimi (Şehir içi)', 'Multimedya ekranı'],
        buyingTips: ['Kapı fitillerini kontrol edin']
    },
    {
        id: 'dacia-sandero-stepway-1-0-tce',
        slug: 'dacia-sandero-stepway-1-0-tce',
        brand: 'Dacia',
        model: 'Sandero',
        variant: 'Stepway 1.0 TCe',
        years: '2021-2024',
        generation: 'Mk3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/2018_Dacia_Duster_Prestige_Blue_dCI%2C_front_8.21.18.jpg/1280px-2018_Dacia_Duster_Prestige_Blue_dCI%2C_front_8.21.18.jpg',
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            { id: 'sandero-1', title: 'Wastegate Sesi', description: 'Turbodan gelen şıngırtı sesi (Kronik).', category: 'motor', riskLevel: 'LOW', affectedKm: '0 km\'den itibaren', repairCost: 'Çözümsüz' },
            { id: 'sandero-2', title: 'Multimedya Kopması', description: 'Kablosuz Apple CarPlay bağlantı sorunu.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Fiyat/Performans', 'Yüksek sürüş', 'LPG uyumu'],
        cons: ['Güvenlik (2 yıldız)', 'Plastik kalitesi'],
        buyingTips: ['Turbo sesini (şıngırtı) dinleyin']
    },
    {
        id: 'dacia-jogger-1-0-tce',
        slug: 'dacia-jogger-1-0-tce',
        brand: 'Dacia',
        model: 'Jogger',
        variant: '1.0 TCe',
        years: '2022-2024',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/2018_Dacia_Duster_Prestige_Blue_dCI%2C_front_8.21.18.jpg/1280px-2018_Dacia_Duster_Prestige_Blue_dCI%2C_front_8.21.18.jpg',
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 7000,
        issues: [
            { id: 'jogger-1', title: 'Debriyaj Pedalı', description: 'Debriyaj pedalından gelen gıcırtı sesi.', category: 'sanziman', riskLevel: 'LOW', affectedKm: '30.000+ km', repairCost: 'Yağlama' },
            { id: 'jogger-2', title: 'Rüzgar Sesi', description: 'Yüksek hızda tavan barlarından gelen ses.', category: 'govde', riskLevel: 'LOW', affectedKm: '100 km/s+', repairCost: 'Yok' }
        ],
        pros: ['7 kişilik en ucuz araç', 'Genişlik', 'Fiyat'],
        cons: ['Motor performansı (dolu iken)', 'Yalıtım'],
        buyingTips: ['7 koltuklu mu kontrol edin, debriyajı dinleyin']
    },
    {
        id: 'peugeot-208-1-2-puretech',
        slug: 'peugeot-208-1-2-puretech',
        brand: 'Peugeot',
        model: '208',
        variant: '1.2 PureTech',
        years: '2019-2024',
        generation: 'P21',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        reliabilityScore: 80,
        totalIssues: 1,
        searchCount: 10000,
        issues: [
            { id: '208-1', title: 'Triger Kayışı', description: 'Yağlı triger kayışı deformasyonu.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '15.000 - 30.000 TL' }
        ],
        pros: ['Tasarım', 'EAT8', 'Dijital gösterge'],
        cons: ['Arka alan', 'Triger bakım maliyeti'],
        buyingTips: ['Triger kayışı değişmiş mi?']
    },
    {
        id: 'peugeot-308-new-1-2',
        slug: 'peugeot-308-new-1-2',
        brand: 'Peugeot',
        model: '308',
        variant: '1.2 PureTech',
        years: '2022-2024',
        generation: 'P51',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        reliabilityScore: 81,
        totalIssues: 1,
        searchCount: 8000,
        issues: [
            { id: '308-1', title: 'Ekran Yazılımı', description: 'Infotainment sistemi yavaşlığı.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Premium tasarım', 'Kalite', 'Sürüş'],
        cons: ['Motor sesi', 'Fiyat'],
        buyingTips: ['Yazılım güncellemelerini sorun']
    },
    {
        id: 'peugeot-408-1-2-puretech',
        slug: 'peugeot-408-1-2-puretech',
        brand: 'Peugeot',
        model: '408',
        variant: '1.2 PureTech',
        years: '2023-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        reliabilityScore: 82,
        totalIssues: 1,
        searchCount: 9500,
        issues: [
            { id: '408-1', title: 'Triger Kayışı', description: '1.2 PureTech motorun triger hassasiyeti.', category: 'motor', riskLevel: 'HIGH', affectedKm: 'uzun vade', repairCost: 'Bakım Maliyeti' }
        ],
        pros: ['Göz alıcı tasarım', 'Genişlik', 'Konfor'],
        cons: ['Arka görüş kısıtlı', 'Motor performansı'],
        buyingTips: ['Özel servis geçmişine bakın']
    },
    {
        id: 'skoda-kamiq-1-0-tsi',
        slug: 'skoda-kamiq-1-0-tsi',
        brand: 'Skoda',
        model: 'Kamiq',
        variant: '1.0 TSI',
        years: '2019-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
        reliabilityScore: 85,
        totalIssues: 1,
        searchCount: 8800,
        issues: [
            { id: 'kamiq-1', title: 'Kapı Gıcırtısı', description: 'Kapı fitillerinden gelen ses.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '500 TL' }
        ],
        pros: ['Geniş iç mekan', 'Pratik çözümler', 'Konfor'],
        cons: ['Sade tasarım', 'Rüzgar sesi'],
        buyingTips: ['Kapı fitillerine bakım yapılmış mı?']
    },
    {
        id: 'skoda-scala-1-0-tsi',
        slug: 'skoda-scala-1-0-tsi',
        brand: 'Skoda',
        model: 'Scala',
        variant: '1.0 TSI',
        years: '2019-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
        reliabilityScore: 85,
        totalIssues: 1,
        searchCount: 6500,
        issues: [
            { id: 'scala-1', title: 'Multimedya', description: 'Ekranın geç açılması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '0' }
        ],
        pros: ['Sınıfının en genişi', 'Bagaj hacmi', 'Fiyat/Performans'],
        cons: ['Yalıtım', 'Süspansiyon sesi'],
        buyingTips: ['Bagaj havuzu var mı bakın']
    },
    {
        id: 'opel-astra-1-2-turbo',
        slug: 'opel-astra-1-2-turbo',
        brand: 'Opel',
        model: 'Astra',
        variant: '1.2 Turbo',
        years: '2022-2024',
        generation: 'L',
        image: '/cars/opel-astra.png',
        price: 1550000,
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 9800,
        issues: [
            { id: 'astra-1', title: 'Pure Panel', description: 'Gösterge ve multimedya ekranlarının kararması.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: 'Yazılım' },
            { id: 'astra-2', title: '360 Kamera', description: 'Kamera görüntüsünde donma ve kalitesizlik.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Çözümsüz' }
        ],
        pros: ['Keskin tasarım', 'Pure Panel ekran', 'Tok sürüş'],
        cons: ['Sert süspansiyon', 'Arka camlar küçük'],
        buyingTips: ['Kameraları kontrol edin', 'Yazılım güncel mi?']
    },
    {
        id: 'opel-mokka-1-2-turbo',
        slug: 'opel-mokka-1-2-turbo',
        brand: 'Opel',
        model: 'Mokka',
        variant: '1.2 Turbo',
        years: '2021-2024',
        generation: 'B',
        image: '/cars/opel-mokka.png',
        reliabilityScore: 81,
        totalIssues: 2,
        searchCount: 9200,
        issues: [
            { id: 'mokka-1', title: 'Start Stop', description: 'Start stop devreye girmeme sorunu (Akü).', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Akü kaynaklı', repairCost: 'Akü değişimi' },
            { id: 'mokka-2', title: 'Triger Kayışı', description: '1.2 motorlarda triger kayışı kontrolü şart.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '15.000 TL' }
        ],
        pros: ['Tasarım ikonu', 'Donanım', 'Şehir içi kullanım'],
        cons: ['İç mekan dar', 'Bagaj küçük'],
        buyingTips: ['Akü durumuna bakın', 'Triger kontrolü yapıldı mı?']
    },
    {
        id: 'opel-crossland-1-2-turbo',
        slug: 'opel-crossland-1-2-turbo',
        brand: 'Opel',
        model: 'Crossland',
        variant: '1.2 Turbo',
        years: '2020-2024',
        generation: 'Mk1',
        image: '/cars/opel-mokka.png',
        reliabilityScore: 83,
        totalIssues: 1,
        searchCount: 7000,
        issues: [
            { id: 'crossland-1', title: 'Amortisör Sesi', description: 'Süspansiyon çalışma sesi (Lokurtu).', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: '0' }
        ],
        pros: ['Fonksiyonellik', 'Genişlik', 'Fiyat'],
        cons: ['Eski platform', 'Rüzgar sesi'],
        buyingTips: ['Kol dayama sağlam mı bakın']
    },
    {
        id: 'citroen-c3-1-2-puretech',
        slug: 'citroen-c3-1-2-puretech',
        brand: 'Citroen',
        model: 'C3',
        variant: 'C3 1.2 PureTech',
        years: '2016-2024',
        generation: 'Mk3',
        image: '/cars/citroen-c3.png',
        reliabilityScore: 79,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            { id: 'c3-1', title: 'Triger Kayışı', description: 'Yağlı triger kayışının parçalanarak yağ pompasını tıkaması.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '20.000+ TL' },
            { id: 'c3-2', title: 'Yağ Eksiltme', description: 'Motor yağ yakma sorunu.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: 'Motor Revizyonu' }
        ],
        pros: ['Konfor (Advanced Comfort)', 'Özelleştirme', 'Fiyat'],
        cons: ['Yatış eğilimi', 'Eski şanzıman (EAT6)'],
        buyingTips: ['Triger kayışını mutlaka kontrol ettirin']
    },
    {
        id: 'citroen-celysee-1-5-bluehdi',
        slug: 'citroen-celysee-1-5-bluehdi',
        brand: 'Citroen',
        model: 'C-Elysee',
        variant: '1.5 BlueHDi',
        years: '2012-2024',
        generation: 'Mk2',
        image: '/cars/citroen-celysee.png',
        reliabilityScore: 87,
        totalIssues: 1,
        searchCount: 7500,
        issues: [
            { id: 'celysee-1', title: 'AdBlue', description: 'AdBlue depo arızası (Kronik PSA sorunu).', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '15.000 TL' }
        ],
        pros: ['Yakıt cimrisi', 'Bagaj', 'Dayanıklılık'],
        cons: ['Konfor', 'Yalıtım', 'Donanım'],
        buyingTips: ['AdBlue iptali var mı bakın']
    },
    {
        id: 'nissan-juke-1-0-dig-t',
        slug: 'nissan-juke-1-0-dig-t',
        brand: 'Nissan',
        model: 'Juke',
        variant: '1.0 DIG-T',
        years: '2019-2024',
        generation: 'F16',
        image: '/cars/nissan-juke.png',
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            { id: 'juke-1', title: 'DCT Isınma', description: 'Sıkışık trafikte şanzıman ısınması uyarısı.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'İstanbul trafiği', repairCost: 'Soğutma' },
            { id: 'juke-2', title: 'Start-Stop', description: 'Sistemin devreye girmemesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Akü' }
        ],
        pros: ['Tasarım', 'Ses sistemi (Bose)', 'Sürüş'],
        cons: ['Arka alan', 'Sert süspansiyon'],
        buyingTips: ['DCT geçişlerini kontrol edin']
    },
    {
        id: 'kia-stonic-1-4-mpi',
        slug: 'kia-stonic-1-4-mpi',
        brand: 'Kia',
        model: 'Stonic',
        variant: '1.4 MPI',
        years: '2017-2024',
        generation: 'YB',
        image: '/cars/kia-stonic.png',
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            { id: 'stonic-1', title: 'Motor Performansı', description: 'Yokuşlarda çekiş düşüklüğü (Atmosferik).', category: 'motor', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Yok' }
        ],
        pros: ['Sorunsuzluk', 'Tam otomatik şanzıman', 'Fiyat'],
        cons: ['Performans', 'Plastik kalitesi'],
        buyingTips: ['LPG uyumunu kontrol edin']
    },

    // BMW
    {
        id: 'bmw-f10-520i',
        slug: 'bmw-f10-520i',
        brand: 'BMW',
        model: '5 Serisi',
        variant: 'F10 520i',
        years: '2010-2016',
        generation: 'F10',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 68,
        totalIssues: 8,
        searchCount: 25000,
        issues: [
            { id: 'f10-1', title: 'N20 Zincir Seti', description: 'N20 motorlarda yağ pompası ve eksantrik zincirinin uzaması (Hayati Risk).', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000 - 120.000 km', repairCost: '30.000 - 50.000 TL' },
            { id: 'f10-2', title: 'Tahrik Uyarısı', description: 'Turbo wastegate veya selenoid valf arızası kaynaklı güç kısıtlaması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '15.000 - 30.000 TL' },
            { id: 'f10-3', title: 'Kapı Kolu Erimesi', description: 'İç kapı tutamaklarının yapış yapış olması ve erimesi.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Sürüş dinamikleri (Arkadan itiş)', 'Prestij', 'ZF 8 ileri şanzıman'],
        cons: ['N20 zincir riski', 'Yüksek bakım maliyeti', 'Trim sesleri (Premium hissettirmiyor)'],
        buyingTips: ['Zincir seti değişmiş mi? (Ses dinleyin)', 'Yağ kaçağı kontrolü yapın', 'İç trimleri kontrol edin']
    },
    {
        id: 'bmw-f10-520d',
        slug: 'bmw-f10-520d',
        brand: 'BMW',
        model: '5 Serisi',
        variant: 'F10 520d',
        years: '2010-2016',
        generation: 'F10',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 22000,
        issues: [
            { id: 'f10d-1', title: 'N47 Zincir Sesi', description: 'Dizel motorlarda zincir şakırtısı ve kopma riski (2012 öncesi daha riskli).', category: 'motor', riskLevel: 'HIGH', affectedKm: '120.000+ km', repairCost: '40.000 - 60.000 TL' },
            { id: 'f10d-2', title: 'EGR Soğutucu', description: 'EGR soğutucusunun delinmesi ve su eksiltme.', category: 'motor', riskLevel: 'HIGH', affectedKm: '100.000+ km', repairCost: '15.000 - 25.000 TL' }
        ],
        pros: ['Ekonomik yakıt tüketimi', 'Yüksek tork', 'Uzun yol konforu'],
        cons: ['Zincir riski', 'EGR yangın riski (Geri çağırma var)', 'AdBlue sistemi'],
        buyingTips: ['EGR değişimi yapıldı mı? (Yetkili servis kaydı)', 'Zincir sesi var mı?']
    },
    {
        id: 'bmw-f30-320i',
        slug: 'bmw-f30-320i',
        brand: 'BMW',
        model: '3 Serisi',
        variant: 'F30 320i',
        years: '2012-2018',
        generation: 'F30',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 70,
        totalIssues: 6,
        searchCount: 28000,
        issues: [
            { id: 'f30-1', title: 'N20 Zincir Problemi', description: 'Motor yağı basınç düşüklüğü uyarısı ve zincir sesi.', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '30.000 - 50.000 TL' },
            { id: 'f30-2', title: 'Su Genleşme Kabı', description: 'Yedek su deposunun çatlaması ve su kaçağı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '3.000 - 6.000 TL' }
        ],
        pros: ['Sınıfının en iyi şanzımanı (ZF)', 'Sportif sürüş', 'İkinci el piyasası'],
        cons: ['N20 zincir sorunu', 'Kapı kolları erimesi', 'Deri koltuk çatlaması'],
        buyingTips: ['Zincir değişimi faturası isteyin', 'Su kaçağı (terleme) var mı bakın']
    },
    {
        id: 'bmw-g20-320i',
        slug: 'bmw-g20-320i',
        brand: 'BMW',
        model: '3 Serisi',
        variant: 'G20 320i',
        years: '2019-2024',
        generation: 'G20',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 82,
        totalIssues: 3,
        searchCount: 18000,
        issues: [
            { id: 'g20-1', title: 'Direksiyon Kutusu', description: 'Direksiyondan gelen tıkırtı sesi.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '30.000+ km', repairCost: 'Garantiden/Revizyon' }
        ],
        pros: ['Modern teknoloji', 'B48 motor güvenilirliği (N20\'ye göre çok iyi)', 'Yalıtım'],
        cons: ['Yüksek fiyat', 'Run-Flat lastik sertliği'],
        buyingTips: ['Yazılım güncellemelerini kontrol edin', 'Vanos selenoid hatası var mı?']
    },

    // MERCEDES
    {
        id: 'mercedes-c200-w205',
        slug: 'mercedes-c200-w205',
        brand: 'Mercedes-Benz',
        model: 'C Serisi',
        variant: 'C200 W205',
        years: '2014-2021',
        generation: 'W205',
        image: '/cars/fiat-egea.png',
        reliabilityScore: 78,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            { id: 'w205-1', title: 'NOx Sensörü', description: 'Dizel ve benzinli motorlarda NOx sensörü arızası (Motor arıza lambası).', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '15.000 - 25.000 TL' },
            { id: 'w205-2', title: 'Rüzgar Sesi', description: 'Akustik cam olmayan modellerde yüksek hızda rüzgar sesi.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: 'Çözümsüz' }
        ],
        pros: ['Yıldız prestiji', 'İç mekan kalitesi', 'Sürüş konforu'],
        cons: ['NOx sensörü maliyeti', 'Rüzgar sesi', 'Trim sesleri'],
        buyingTips: ['NOx sensörü değişmiş mi?', 'Akustik cam opsiyonu var mı?']
    },
    {
        id: 'mercedes-e250-w212',
        slug: 'mercedes-e250-w212',
        brand: 'Mercedes-Benz',
        model: 'E Serisi',
        variant: 'E250 W212',
        years: '2009-2016',
        generation: 'W212',
        image: '/cars/mercedes-e-class.png',
        reliabilityScore: 80,
        totalIssues: 4,
        searchCount: 18000,
        issues: [
            { id: 'w212-1', title: 'Eksantrik Dişlisi', description: 'M271 motorlarda eksantrik dişlisi sıyırması (İlk çalıştırmada ses).', category: 'motor', riskLevel: 'HIGH', affectedKm: '100.000+ km', repairCost: '30.000 - 50.000 TL' },
            { id: 'w212-2', title: 'Arka Stop Lambaları', description: 'LED stopların sönük yanması veya bozulması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: '5.000 - 10.000 TL' }
        ],
        pros: ['Tank gibi sağlam', 'Konfor kralı', 'Uzun yol gemisi'],
        cons: ['M271 zincir/dişli riski', 'Yakıt tüketimi'],
        buyingTips: ['İlk çalıştırmada zincir sesi var mı?', 'Stop lambalarını kontrol edin']
    },

    // AUDI
    {
        id: 'audi-a4-b8-2-0-tdi',
        slug: 'audi-a4-b8-2-0-tdi',
        brand: 'Audi',
        model: 'A4',
        variant: 'B8 2.0 TDI',
        years: '2008-2015',
        generation: 'B8',
        image: '/cars/mercedes-e-class.png',
        reliabilityScore: 72,
        totalIssues: 6,
        searchCount: 16000,
        issues: [
            { id: 'a4b8-1', title: 'Yağ Yakma (TFSI)', description: 'Benzinli motorlarda ciddi yağ tüketimi (Segman revizyonu gerekir).', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '50.000 - 80.000 TL' },
            { id: 'a4b8-2', title: 'Multitronic Beyin', description: 'CVT şanzıman beyni arızası.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '150.000+ km', repairCost: '20.000 - 40.000 TL' }
        ],
        pros: ['Quattro çekiş', 'Malzeme kalitesi', 'Sessizlik'],
        cons: ['Yağ yakma sorunu (Benzinli)', 'Multitronic şanzıman riski'],
        buyingTips: ['Yağ tüketimi testi isteyin', 'Dizel tercih edin (TDI daha sorunsuz)']
    },
    {
        id: 'audi-a3-8v-1-4-tfsi',
        slug: 'audi-a3-8v-1-4-tfsi',
        brand: 'Audi',
        model: 'A3',
        variant: '8V 1.4 TFSI',
        years: '2012-2020',
        generation: '8V',
        image: '/cars/mercedes-e-class.png',
        reliabilityScore: 80,
        totalIssues: 4,
        searchCount: 14000,
        issues: [
            { id: 'a3-8v-1', title: 'DSG Kavrama', description: 'S-Tronic şanzımanda titreme ve kavrama bitmesi.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '20.000 - 30.000 TL' },
            { id: 'a3-8v-2', title: 'Termostat', description: 'Su kaçağı yapan termostat ünitesi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '5.000 - 8.000 TL' }
        ],
        pros: ['Premium hatchback lideri', 'Sürüş kalitesi', 'İkinci el'],
        cons: ['S-Tronic masrafları', 'Arkada şaft tüneli yüksek'],
        buyingTips: ['Kavrama testi yapın', 'Triger kayışı kontrolü (90k km)']
    },

    // SEAT
    {
        id: 'seat-leon-1-5-tsi',
        slug: 'seat-leon-1-5-tsi',
        brand: 'Seat',
        model: 'Leon',
        variant: '1.5 TSI',
        years: '2020-2024',
        generation: 'Mk4',
        image: '/cars/mercedes-e-class.png',
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            { id: 'leon-1', title: 'SOS Hatası', description: 'Acil durum çağrı sistemi hatası (Yazılım).', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' },
            { id: 'leon-2', title: 'Golf 8 Sendromu', description: 'Dokunmatik ekran ve yazılım bugları.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Tasarım (Işıklar)', 'Fiyat/Performans', 'Yol tutuş'],
        cons: ['Dokunmatik ergonomisi', 'Yazılım sorunları'],
        buyingTips: ['SOS hatası veriyor mı bakın']
    },
    {
        id: 'seat-ibiza-1-0-tsi',
        slug: 'seat-ibiza-1-0-tsi',
        brand: 'Seat',
        model: 'Ibiza',
        variant: '1.0 TSI',
        years: '2017-2024',
        generation: '6F',
        image: '/cars/mercedes-e-class.png',
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 10000,
        issues: [
            { id: 'ibiza-1', title: 'Klima Flap Sesi', description: 'Klima yönlendirme motorlarından gelen ses.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Sınıfının en sportifi', 'Performanslı motor', 'Genişlik'],
        cons: ['Sert plastik', 'Yalıtım (Polo\'dan kötü)'],
        buyingTips: ['DSG vites geçişlerini kontrol edin']
    },

    // VOLVO
    {
        id: 'volvo-xc60-b4',
        slug: 'volvo-xc60-b4',
        brand: 'Volvo',
        model: 'XC60',
        variant: 'B4 Mild Hybrid',
        years: '2017-2024',
        generation: 'SPA',
        image: '/cars/mercedes-e-class.png',
        reliabilityScore: 83,
        totalIssues: 3,
        searchCount: 9000,
        issues: [
            { id: 'xc60-1', title: 'Google Automotive Donması', description: 'Yeni nesil multimedya sisteminin çökmesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Reset/Yazılım' },
            { id: 'xc60-2', title: 'Sunroof Su Alma', description: 'Tahliye kanallarının tıkanması sonucu su alma.', category: 'govde', riskLevel: 'MEDIUM', affectedKm: 'Bakımsız araçlarda', repairCost: 'Temizlik' }
        ],
        pros: ['Dünyanın en güvenli aracı', 'Koltuk konforu', 'Bower & Wilkins ses sistemi'],
        cons: ['Yedek parça fiyatları (Çok yüksek)', 'Yakıt tüketimi (Ağır kasa)'],
        buyingTips: ['Sunroof etrafında su izi var mı?', 'Yetkili servis bakımlı mı? (İyi niyet garantisi için şart)']
    },

    // MAZDA
    {
        id: 'mazda-cx5-2-0-skyactiv',
        slug: 'mazda-cx5-2-0-skyactiv',
        brand: 'Mazda',
        model: 'CX-5',
        variant: '2.0 Skyactiv-G',
        years: '2017-2024',
        generation: 'KF',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2020_Mazda_CX-5_Sport_2WD_petrol_2.0_Front.jpg/1280px-2020_Mazda_CX-5_Sport_2WD_petrol_2.0_Front.jpg',
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 8500,
        issues: [
            { id: 'cx5-1', title: 'Ayna Katlama Motoru', description: 'Yan aynaların katlanmaması veya dişli sesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '2.000 - 5.000 TL' }
        ],
        pros: ['Japon mühendisliği', 'Sorunsuz atmosferik motor', 'Sürüş hissi'],
        cons: ['Motor performansı (Turbo yok)', 'Vergi dilimi (2.0 motor)'],
        buyingTips: ['Aynaları açıp kapatarak test edin']
    },
    {
        id: 'mazda3-bp',
        slug: 'mazda-3-2-0-skyactiv',
        brand: 'Mazda',
        model: 'Mazda3',
        variant: '2.0 Skyactiv-G',
        years: '2019-2024',
        generation: 'BP',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/2020_Mazda_CX-5_Sport_2WD_petrol_2.0_Front.jpg/1280px-2020_Mazda_CX-5_Sport_2WD_petrol_2.0_Front.jpg',
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 6000,
        issues: [],
        pros: ['Tasarım ödüllü', 'İç mekan kalitesi', 'Sessizlik'],
        cons: ['Arka görüş (C sütunu çok geniş)', 'İkinci el yavaş'],
        buyingTips: ['Kör nokta uyarı sistemi çalışıyor mu kontrol edin']
    },
    // NEW ADDITIONS (Sprint)
    {
        id: 'togg-t10x-v2',
        slug: 'togg-t10x-v2',
        brand: 'Togg',
        model: 'T10X',
        variant: 'V2 RWD',
        years: '2023-2024',
        generation: 'Gen1',
        image: 'https://images.pexels.com/photos/9459158/pexels-photo-9459158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        price: 2600000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 25000,
        issues: [
            { id: 'togg-1', title: 'Yazılım Güncellemeleri', description: 'Ekran donmaları ve şarj istasyonu tanıma sorunları.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'İlk seriler', repairCost: 'OTA (Ücretsiz)' },
            { id: 'togg-2', title: 'Şarj Kapağı', description: 'Elektrikli şarj kapağının açılmaması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Servis Ayarı' }
        ],
        pros: ['Yerli üretim gururu', 'Geniş iç hacim', 'Performans (218hp)'],
        cons: ['Şarj altyapısı (Genel sorun)', 'Yazılım stabilite'],
        buyingTips: ['Yazılım sürümünü kontrol edin (1.4.0+)']
    },
    {
        id: 'chery-omoda-5',
        slug: 'chery-omoda-5',
        brand: 'Chery',
        model: 'Omoda 5',
        variant: '1.6 TGDI',
        years: '2023-2024',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chery_Omoda_5%2C_2023%2C_Hannover_Messe_%28IAA_Mobility%29.jpg/1280px-Chery_Omoda_5%2C_2023%2C_Hannover_Messe_%28IAA_Mobility%29.jpg',
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 18000,
        issues: [
            { id: 'omoda-1', title: 'Yakıt Tüketimi', description: 'Şehir içi 10-12 litre arası yüksek tüketim.', category: 'motor', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Yok' },
            { id: 'omoda-2', title: 'Multimedya', description: 'CarPlay bağlantı kopmaları ve ekran yavaşlığı.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Fiyat/Performans', 'Fütüristik tasarım', 'Zengin donanım'],
        cons: ['Yüksek yakıt tüketimi', 'Sert süspansiyon'],
        buyingTips: ['Yakıt tüketimini göze alarak alın']
    },
    {
        id: 'chery-tiggo-8-pro',
        slug: 'chery-tiggo-8-pro',
        brand: 'Chery',
        model: 'Tiggo 8 Pro',
        variant: '1.6 TGDI Avantgarde',
        years: '2023-2024',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chery_Omoda_5%2C_2023%2C_Hannover_Messe_%28IAA_Mobility%29.jpg/1280px-Chery_Omoda_5%2C_2023%2C_Hannover_Messe_%28IAA_Mobility%29.jpg',
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 15000,
        issues: [
            { id: 'tiggo8-1', title: 'Fren Balatası', description: 'Erken biten fren balataları.', category: 'fren', riskLevel: 'LOW', affectedKm: '20.000 km', repairCost: '3.000 TL' }
        ],
        pros: ['7 kişilik lüks', 'Konfor', 'Genişlik'],
        cons: ['Yakıt tüketimi', 'Marka imajı (Yeni)'],
        buyingTips: ['Frenleri kontrol ettirin']
    },
    {
        id: 'tesla-model-y-lr',
        slug: 'tesla-model-y-lr',
        brand: 'Tesla',
        model: 'Model Y',
        variant: 'Long Range',
        years: '2022-2024',
        generation: 'Mk1',
        image: '/cars/tesla-modely.png',
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            { id: 'tesla-1', title: 'Panel Boşlukları', description: 'Kaporta parçaları arasında orantısız boşluklar.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Fabrikasyon', repairCost: 'Kozmetik' },
            { id: 'tesla-2', title: 'Süspansiyon', description: 'Çok sert süspansiyon ve trim sesleri.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Konfor sorunu' }
        ],
        pros: ['Supercharger ağı', 'Yazılım ve Otopilot', 'Performans'],
        cons: ['Sert sürüş', 'Malzeme kalitesi'],
        buyingTips: ['Kaporta boşluklarını ve boyayı kontrol edin']
    },
    {
        id: 'ford-focus-3-diesel',
        slug: 'ford-focus-3-1-6-tdci',
        brand: 'Ford',
        model: 'Focus',
        variant: 'Focus 3 1.6 TDCi',
        years: '2011-2015',
        generation: 'Mk3',
        image: '/cars/ford-focus.png',
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 16000,
        issues: [
            { id: 'focus3-1', title: 'Powershift (Kavrama)', description: 'Otomatik şanzıman kavrama sorunları ve titreme.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '100.000+ km', repairCost: '30.000 - 50.000 TL' },
            { id: 'focus3-2', title: 'Enjektör', description: 'Dizel enjektör şakırtısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '150.000+ km', repairCost: '10.000 TL' }
        ],
        pros: ['Yol tutuş referansı', 'Yakıt ekonomisi', 'Tasarım'],
        cons: ['Powershift riski', 'Arka diz mesafesi dar'],
        buyingTips: ['Powershift ise vites geçişlerine çok dikkat edin']
    },
    {
        id: 'honda-civic-fb7',
        slug: 'honda-civic-fb7-eco',
        brand: 'Honda',
        model: 'Civic',
        variant: 'FB7 1.6 Eco',
        years: '2012-2016',
        generation: 'FB7',
        image: '/cars/honda-civic.png',
        reliabilityScore: 94,
        totalIssues: 1,
        searchCount: 19000,
        issues: [
            { id: 'fb7-1', title: 'Boya Kalitesi', description: 'Çok ince ve çizilmeye müsait boya.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Kozmetik' }
        ],
        pros: ['LPG uyumu (Fabrikasyon)', 'Sorunsuz motor/şanzıman', 'İkinci el'],
        cons: ['Yalıtım zayıf', 'Boya kalitesi'],
        buyingTips: ['LPG bakımını kontrol edin, şanzıman yağı değişmiş mi?']
    },
    {
        id: 'vw-passat-b8-tdi',
        slug: 'volkswagen-passat-b8-tdi',
        brand: 'Volkswagen',
        model: 'Passat',
        variant: 'B8 1.6 TDI',
        years: '2015-2020',
        generation: 'B8',
        image: '/cars/volkswagen-passat.png',
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 28000,
        issues: [
            { id: 'b8-1', title: 'DSG Mekatronik', description: 'DSG şanzıman mekatronik arızası.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '120.000+ km', repairCost: '25.000 - 45.000 TL' },
            { id: 'b8-2', title: 'Volan', description: 'Çift kütleli volan sesi.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '150.000+ km', repairCost: '15.000 TL' }
        ],
        pros: ['Prestij', 'Konfor', 'Genişlik'],
        cons: ['DSG masraf riski', 'Yüksek ikinci el fiyatı'],
        buyingTips: ['DSG kavraması ve volan sesi kontrol edilmeli']
    },
    {
        id: 'porsche-macan',
        slug: 'porsche-macan-2-0',
        brand: 'Porsche',
        model: 'Macan',
        variant: '2.0',
        years: '2015-2023',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 4500,
        issues: [
            { id: 'macan-1', title: 'Transfer Kutusu', description: 'Transfer kutusu (arazi şanzımanı) arızası ve titreme.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '100.000+ TL' },
            { id: 'macan-2', title: 'Yağ Kaçağı', description: 'Zamanlama kapağından yağ sızıntısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '20.000 TL' }
        ],
        pros: ['Porsche sürüşü', 'Kalite', 'Prestij'],
        cons: ['Bakım maliyetleri', 'Arka yaşam alanı'],
        buyingTips: ['Transfer kutusu değişmiş mi? Titreme var mı?']
    },
    {
        id: 'land-rover-range-rover-sport',
        slug: 'land-rover-range-rover-sport',
        brand: 'Land Rover',
        model: 'Range Rover Sport',
        variant: '3.0 SDV6',
        years: '2014-2020',
        generation: 'L494',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 65,
        totalIssues: 3,
        searchCount: 5000,
        issues: [
            { id: 'rrs-1', title: 'Krank Mili Kırılması', description: '3.0 dizel motorlarda krank mili kırılma riski (Motor yatak sarması).', category: 'motor', riskLevel: 'HIGH', affectedKm: '100.000+ km', repairCost: '300.000+ TL' },
            { id: 'rrs-2', title: 'Hava Süspansiyonu', description: 'Körüklerin patlaması veya kompresör arızası.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '50.000 TL' },
            { id: 'rrs-3', title: 'Elektronik', description: 'Ekran ve sensör arızaları.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Tespiti zor' }
        ],
        pros: ['Konfor', 'Arazi yeteneği', 'Prestij'],
        cons: ['Çok yüksek arıza riski', 'Bakım maliyeti'],
        buyingTips: ['Motor yağı analiz edilmeli (Metal talaşı var mı?)']
    },
    // SEAT Models
    {
        id: 'seat-ateca-1-5-tsi',
        slug: 'seat-ateca-1-5-tsi',
        brand: 'Seat',
        model: 'Ateca',
        variant: '1.5 TSI',
        years: '2019-2024',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 12000,
        issues: [
            { id: 'ateca-1', title: 'DSG Titreme', description: 'Kalkışlarda kararsızlık ve titreme (Kuru kavrama).', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '25.000 - 45.000 TL' },
            { id: 'ateca-2', title: 'Bagaj Kapağı', description: 'Elektrikli bagajın açılmaması veya takılması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Sensör değişimi' }
        ],
        pros: ['Geniş iç hacim', 'VW teknolojisi', 'Fiyat/Performans'],
        cons: ['Sert süspansiyon', 'Rüzgar sesi (120+ km/s)'],
        buyingTips: ['DSG vites geçişlerini kontrol edin']
    },
    {
        id: 'seat-leon-1-5-etsi',
        slug: 'seat-leon-1-5-etsi',
        brand: 'Seat',
        model: 'Leon',
        variant: '1.5 eTSI',
        years: '2020-2024',
        generation: 'Mk4',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 83,
        totalIssues: 2,
        searchCount: 18000,
        issues: [
            { id: 'leon-1', title: 'Multimedya Donması', description: 'Ekranın kilitlenmesi ve tepki vermemesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Yazılım', repairCost: 'Güncelleme' },
            { id: 'leon-2', title: 'SOS Hatası', description: 'Acil durum çağrı sistemi hatası uyarısı.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Modül değişimi' }
        ],
        pros: ['Keskin tasarım', 'Sürüş dinamikleri', 'Led aydınlatma'],
        cons: ['Dokunmatik kontroller (Kullanışsız)', 'Malzeme kalitesi (alt kısımlar)'],
        buyingTips: ['Ekranın dokunmatiğini test edin']
    },
    {
        id: 'seat-ibiza-1-0-new',
        slug: 'seat-ibiza-1-0-evo',
        brand: 'Seat',
        model: 'Ibiza',
        variant: '1.0 EcoTSI',
        years: '2021-2024',
        generation: 'Mk5 Facelift',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 10000,
        issues: [
            { id: 'ibiza-1', title: 'Trim Sesleri', description: 'Kapı içlerinden gelen tıkırtılar.', category: 'govde', riskLevel: 'LOW', affectedKm: '10.000+ km', repairCost: 'İzolasyon' }
        ],
        pros: ['Genç tasarım', 'DSG konforu', 'Yol tutuş'],
        cons: ['Sert plastikler', 'Arka diz mesafesi'],
        buyingTips: ['Trim seslerine dikkat edin']
    },
    {
        id: 'seat-arona-1-0-dsg',
        slug: 'seat-arona-1-0-eco-tsi',
        brand: 'Seat',
        model: 'Arona',
        variant: '1.0 EcoTSI',
        years: '2021-2024',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 85,
        totalIssues: 1,
        searchCount: 8000,
        issues: [
            { id: 'arona-1', title: 'Rüzgar Sesi', description: 'A sütunundan gelen rüzgar sesi.', category: 'govde', riskLevel: 'LOW', affectedKm: '100+ km/s', repairCost: 'Fitil ayarı' }
        ],
        pros: ['Yüksek oturma pozisyonu', 'Şehir içi kıvraklık', 'Tasarım'],
        cons: ['İç mekan kalitesi', 'Bagaj'],
        buyingTips: ['Yüksek hızda rüzgar sesini dinleyin']
    },
    {
        id: 'skoda-superb-diesel',
        slug: 'skoda-superb-1-6-tdi',
        brand: 'Skoda',
        model: 'Superb',
        variant: '1.6 TDI',
        years: '2015-2020',
        generation: 'B8',
        image: '/cars/volkswagen-passat.png',
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            { id: 'superb-1', title: 'AdBlue', description: 'AdBlue enjektör tıkanması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '50.000+ km', repairCost: '5.000 TL' },
            { id: 'superb-2', title: 'Krom Çıta', description: 'Cam çıtalarının oksitlenmesi.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kozmetik', repairCost: '2.000 TL' }
        ],
        pros: ['Devasa iç hacim', 'Bagaj', 'Konfor'],
        cons: ['Park sorunu (Boyut)', 'DSG hassasiyeti'],
        buyingTips: ['AdBlue sistemini kontrol edin']
    },
    {
        id: 'citroen-c5-aircross',
        slug: 'citroen-c5-aircross-1-5-bluehdi',
        brand: 'Citroen',
        model: 'C5 Aircross',
        variant: '1.5 BlueHDi',
        years: '2019-2023',
        generation: 'Mk1',
        image: '/cars/citroen-celysee.png',
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 15000,
        issues: [
            { id: 'c5a-1', title: 'AdBlue Tankı', description: 'AdBlue tankı deformasyonu ve pompa arızası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '20.000 TL' },
            { id: 'c5a-2', title: 'Ekran Kararması', description: 'Hayalet ekranın gidip gelmesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Süspansiyon konforu', 'Arka 3 bağımsız koltuk', 'Genişlik'],
        cons: ['Virajda yatma', 'Multimedya yavaşlığı'],
        buyingTips: ['AdBlue tankı değişmiş mi sorun']
    },
    {
        id: 'citroen-c4-new',
        slug: 'citroen-c4-1-2-puretech',
        brand: 'Citroen',
        model: 'C4',
        variant: '1.2 PureTech',
        years: '2021-2024',
        generation: 'Mk3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Citroen_C3_Flair_PureTech_1.2_Front.jpg/1280px-2019_Citroen_C3_Flair_PureTech_1.2_Front.jpg',
        reliabilityScore: 82,
        totalIssues: 1,
        searchCount: 9000,
        issues: [
            { id: 'c4-1', title: 'Tablet Tutucu', description: 'Yolcu tarafı tablet tutucunun kırılması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kullanıma bağlı', repairCost: '1.000 TL' }
        ],
        pros: ['Konfor', 'Tasarım', 'EAT8'],
        cons: ['Arka cam (Görüş)', 'Bagaj eşiği yüksek'],
        buyingTips: ['Süspansiyon sesini dinleyin']
    },
    // NEW SPRINT - 30 New Cars
    // KIA
    {
        id: 'kia-sportage-1-6-tgdi',
        slug: 'kia-sportage-1-6-tgdi',
        brand: 'Kia',
        model: 'Sportage',
        variant: '1.6 T-GDI',
        years: '2022-2024',
        generation: 'NQ5',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 87,
        totalIssues: 2,
        searchCount: 18000,
        issues: [
            { id: 'sportage-1', title: 'Panoramik Cam Sesi', description: 'Panoramik tavanın açılıp kapanırken ses yapması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: '2.000 - 5.000 TL' },
            { id: 'sportage-2', title: 'DCT Kararsızlık', description: 'Düşük hızlarda vites geçişinde kararsızlık.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: 'Şehir içi', repairCost: '5.000 - 12.000 TL (Yazılım)' }
        ],
        pros: ['Modern tasarım', 'Geniş iç mekan', 'Zengin donanım'],
        cons: ['Yakıt tüketimi (Şehir içi)', 'DCT alışkanlık istiyor'],
        buyingTips: ['Panoramik tavan sesi normaldir', 'DCT şanzımanı şehir içinde test edin']
    },
    {
        id: 'kia-ceed-1-5-tgdi',
        slug: 'kia-ceed-1-5-tgdi',
        brand: 'Kia',
        model: 'Ceed',
        variant: '1.5 T-GDI',
        years: '2021-2024',
        generation: 'CD',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 12000,
        issues: [
            { id: 'ceed-1', title: 'Multimedya Gecikmesi', description: 'Ekranın yavaş tepki vermesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yazılım güncelleme' }
        ],
        pros: ['Sportif tasarım', '7 yıl garanti', 'Yol tutuş'],
        cons: ['Arka görüş sınırlı', 'Malzeme kalitesi (Alt seviye)'],
        buyingTips: ['Yazılım güncel mi kontrol edin']
    },
    {
        id: 'kia-niro-ev',
        slug: 'kia-niro-ev',
        brand: 'Kia',
        model: 'Niro',
        variant: 'EV',
        years: '2022-2024',
        generation: 'SG2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Togg_T10X_at_Frankfurt_Motor_Show_2023.jpg/1280px-Togg_T10X_at_Frankfurt_Motor_Show_2023.jpg',
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 8000,
        issues: [
            { id: 'niro-1', title: 'Şarj Kapağı', description: 'Şarj kapağının donması veya açılmaması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kış ayları', repairCost: '1.500 - 3.000 TL' }
        ],
        pros: ['460+ km menzil', 'Hızlı şarj', 'Sessizlik'],
        cons: ['Şarj altyapısı', 'Yüksek fiyat'],
        buyingTips: ['Pil sağlık raporunu (SOH) isteyin']
    },
    // MERCEDES
    {
        id: 'mercedes-a180-w177',
        slug: 'mercedes-a180-w177',
        brand: 'Mercedes-Benz',
        model: 'A Serisi',
        variant: 'A180',
        years: '2018-2024',
        generation: 'W177',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            { id: 'a180-1', title: 'MBUX Donması', description: 'Multimedya sisteminin donması veya yeniden başlaması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '2.500 - 6.000 TL (Yazılım)' },
            { id: 'a180-2', title: 'Süspansiyon Sertliği', description: 'AMG Line paketinde aşırı sert sürüş hissi.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Çözümsüz (Tasarım)' }
        ],
        pros: ['Premium iç mekan', 'MBUX sistemi', 'Güvenlik'],
        cons: ['Arka yaşam alanı dar', 'Sert süspansiyon'],
        buyingTips: ['AMG Line ise sürüşü test edin', 'MBUX güncel mi bakın']
    },
    {
        id: 'mercedes-cla-200',
        slug: 'mercedes-cla-200',
        brand: 'Mercedes-Benz',
        model: 'CLA',
        variant: 'CLA 200',
        years: '2019-2024',
        generation: 'C118',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 83,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            { id: 'cla-1', title: 'DCT Titremesi', description: 'Düşük hızlarda kavrama titremesi.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '30.000+ km', repairCost: '20.000 - 35.000 TL' },
            { id: 'cla-2', title: 'Ambient Aydınlatma', description: 'LED şeritlerde renk kayması veya yanmama.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '3.000 - 8.000 TL' }
        ],
        pros: ['Coupe tasarım', 'Kaliteli iç mekan', 'Marka prestiji'],
        cons: ['Arka kafa mesafesi', 'DCT hassasiyeti'],
        buyingTips: ['Yokuş kalkışında titreme var mı?']
    },
    {
        id: 'mercedes-gla-200',
        slug: 'mercedes-gla-200',
        brand: 'Mercedes-Benz',
        model: 'GLA',
        variant: 'GLA 200',
        years: '2020-2024',
        generation: 'H247',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 10000,
        issues: [
            { id: 'gla-1', title: 'Kamera Hatası', description: '360 kamera sisteminin donması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '4.000 - 10.000 TL' }
        ],
        pros: ['Yüksek sürüş pozisyonu', 'Premium hissiyat', 'Güvenlik'],
        cons: ['Bagaj hacmi', 'Fiyat'],
        buyingTips: ['Tüm kameraları test edin']
    },
    // BMW
    {
        id: 'bmw-g20-320i',
        slug: 'bmw-g20-320i',
        brand: 'BMW',
        model: '3 Serisi',
        variant: 'G20 320i',
        years: '2019-2024',
        generation: 'G20',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 16000,
        issues: [
            { id: 'g20-1', title: 'Dijital Gösterge Hatası', description: 'Gösterge panelinde piksel bozulması veya donma.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: '15.000 - 30.000 TL' },
            { id: 'g20-2', title: 'Run-Flat Lastik Sertliği', description: 'Run-flat lastiklerden kaynaklanan sert sürüş.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Normal lastik geçişi' }
        ],
        pros: ['Sürüş dinamikleri', 'Teknoloji', 'Prestij'],
        cons: ['Bakım maliyetleri', 'Run-flat sertliği'],
        buyingTips: ['Dijital göstergeyi kontrol edin', 'Run-flat istemiyorsanız lastik set değişimi planlayın']
    },
    {
        id: 'bmw-x1-sdrive18i',
        slug: 'bmw-x1-sdrive18i',
        brand: 'BMW',
        model: 'X1',
        variant: 'sDrive18i',
        years: '2015-2022',
        generation: 'F48',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 9500,
        issues: [
            { id: 'x1-1', title: 'Zincir Gergi', description: 'B38 motorlarda zincir gergi sesi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '12.000 - 25.000 TL' },
            { id: 'x1-2', title: 'Yağ Kaçağı', description: 'Vanos biriminden yağ sızıntısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '8.000 - 15.000 TL' }
        ],
        pros: ['Pratik boyutlar', 'Şehir içi kullanım', 'Premium marka'],
        cons: ['3 silindirli motor hissizliği', 'Bakım masrafları'],
        buyingTips: ['Zincir sesini dinleyin', 'Motor altını yağ kaçağı için kontrol edin']
    },
    // AUDI
    {
        id: 'audi-a3-8y-35-tfsi',
        slug: 'audi-a3-8y-35-tfsi',
        brand: 'Audi',
        model: 'A3',
        variant: '35 TFSI',
        years: '2020-2024',
        generation: '8Y',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 81,
        totalIssues: 2,
        searchCount: 13000,
        issues: [
            { id: 'a3-8y-1', title: 'Dokunmatik Klima', description: 'Dokunmatik klima kontrollerinin geç tepki vermesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Çözümsüz (Tasarım)' },
            { id: 'a3-8y-2', title: 'DSG Titreme', description: 'Kuru kavrama DSG titremesi (DQ200).', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '50.000+ km', repairCost: '18.000 - 35.000 TL' }
        ],
        pros: ['Kaliteli iç mekan', 'Sürüş teknolojileri', 'Kompakt premium'],
        cons: ['Dokunmatik kontroller', 'DSG riski'],
        buyingTips: ['DSG vites geçişlerini test edin']
    },
    {
        id: 'audi-q3-35-tfsi',
        slug: 'audi-q3-35-tfsi',
        brand: 'Audi',
        model: 'Q3',
        variant: '35 TFSI',
        years: '2018-2024',
        generation: 'F3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 82,
        totalIssues: 1,
        searchCount: 11000,
        issues: [
            { id: 'q3-1', title: 'Panoramik Tavan', description: 'Panoramik tavanın açılırken takılması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '5.000 - 12.000 TL' }
        ],
        pros: ['Geniş iç mekan', 'Premium kalite', 'Quattro seçeneği'],
        cons: ['Yüksek fiyat', 'Bakım maliyetleri'],
        buyingTips: ['Panoramik tavanı açıp kapatın']
    },
    // VOLVO
    {
        id: 'volvo-xc40-t4',
        slug: 'volvo-xc40-t4',
        brand: 'Volvo',
        model: 'XC40',
        variant: 'T4',
        years: '2018-2024',
        generation: 'XC',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 9000,
        issues: [
            { id: 'xc40-1', title: 'Sensus Donması', description: 'Multimedya sisteminin donması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '2.000 - 5.000 TL (Yazılım)' },
            { id: 'xc40-2', title: 'Pilot Assist', description: 'Pilot Assist sisteminin beklenmedik şekilde devre dışı kalması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Servis kalibrasyonu' }
        ],
        pros: ['Güvenlik referansı', 'Premium kalite', 'Skandinav tasarım'],
        cons: ['Yavaş multimedya', 'Yedek parça fiyatları'],
        buyingTips: ['Sensus sistemini test edin']
    },
    {
        id: 'volvo-s60-t4',
        slug: 'volvo-s60-t4',
        brand: 'Volvo',
        model: 'S60',
        variant: 'T4',
        years: '2019-2024',
        generation: 'Z',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 6500,
        issues: [
            { id: 's60-1', title: 'Hava Süspansiyonu', description: 'Opsiyonel hava süspansiyonunun ses yapması.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '25.000 - 45.000 TL' }
        ],
        pros: ['Sessiz kabin', 'Güvenlik', 'Şık tasarım'],
        cons: ['Hava süspansiyon riski', 'Yedek parça'],
        buyingTips: ['Normal mi hava süspansiyon mu kontrol edin']
    },
    // JEEP
    {
        id: 'jeep-compass-1-3-turbo',
        slug: 'jeep-compass-1-3-turbo',
        brand: 'Jeep',
        model: 'Compass',
        variant: '1.3 Turbo',
        years: '2017-2024',
        generation: 'MP',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 75,
        totalIssues: 2,
        searchCount: 8500,
        issues: [
            { id: 'compass-1', title: 'DCT Şanzıman', description: 'DDCT kararsızlık ve titreme.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '40.000+ km', repairCost: '30.000 - 50.000 TL' },
            { id: 'compass-2', title: 'Elektrik Sorunları', description: 'Çeşitli sensör ve elektrik arızaları.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: '5.000 - 15.000 TL' }
        ],
        pros: ['Jeep DNA', 'Trail Rated arazi', 'Tasarım'],
        cons: ['Düşük güvenilirlik', 'DCT problemleri'],
        buyingTips: ['DDCT şanzımanı mutlaka test edin', 'Arıza geçmişini sorun']
    },
    {
        id: 'jeep-renegade-1-3-turbo',
        slug: 'jeep-renegade-1-3-turbo',
        brand: 'Jeep',
        model: 'Renegade',
        variant: '1.3 Turbo',
        years: '2018-2024',
        generation: 'BU',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 74,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            { id: 'renegade-1', title: 'Zincir Sesi', description: '1.3 T4 motorlarda zincir sesi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '15.000 - 25.000 TL' },
            { id: 'renegade-2', title: 'İnfotainment', description: 'Uconnect sisteminin donması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '3.000 - 8.000 TL' }
        ],
        pros: ['Şirin tasarım', 'Arazi yeteneği', 'Fiat altyapısı (Ucuz parça)'],
        cons: ['Güvenilirlik soru işareti', 'İkinci el değer kaybı'],
        buyingTips: ['Zincir sesi dinleyin']
    },
    // SUZUKI
    {
        id: 'suzuki-vitara-1-4-boosterjet',
        slug: 'suzuki-vitara-1-4-boosterjet',
        brand: 'Suzuki',
        model: 'Vitara',
        variant: '1.4 Boosterjet',
        years: '2015-2024',
        generation: 'LY',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 9500,
        issues: [
            { id: 'vitara-1', title: 'Multimedya', description: 'Eski model multimedyanın yavaş çalışması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Aftermarket değişim' }
        ],
        pros: ['Japon güvenilirliği', 'Hafiflik', 'Ekonomik'],
        cons: ['Eski tasarım multimedya', 'Yalıtım orta'],
        buyingTips: ['AllGrip 4x4 tercih edin']
    },
    {
        id: 'suzuki-swift-1-2-dualjet',
        slug: 'suzuki-swift-1-2-dualjet',
        brand: 'Suzuki',
        model: 'Swift',
        variant: '1.2 Dualjet',
        years: '2017-2024',
        generation: 'A2L',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 7000,
        issues: [
            { id: 'swift-1', title: 'CVT Titreme', description: 'CVT şanzımanda düşük hızlarda hafif titreme.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Kabul edilebilir' }
        ],
        pros: ['Ultra hafif (900kg)', 'Şehir içi pratiklik', 'Düşük tüketim'],
        cons: ['Otoyol hızlarında gürültü', 'Arka koltuk dar'],
        buyingTips: ['Manuel tercih edin (CVT yerine)']
    },
    // MG
    {
        id: 'mg-zs-ev',
        slug: 'mg-zs-ev',
        brand: 'MG',
        model: 'ZS',
        variant: 'EV',
        years: '2021-2024',
        generation: 'ZS2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Togg_T10X_at_Frankfurt_Motor_Show_2023.jpg/1280px-Togg_T10X_at_Frankfurt_Motor_Show_2023.jpg',
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 11000,
        issues: [
            { id: 'zs-1', title: 'Şarj Adaptasyonu', description: 'Bazı şarj istasyonlarıyla uyumsuzluk.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' },
            { id: 'zs-2', title: 'iSMART Sistem', description: 'Mobil uygulama bağlantı sorunları.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım güncelleme' }
        ],
        pros: ['Uygun fiyat', '320 km menzil', 'Geniş iç mekan'],
        cons: ['Servis ağı yok', 'Marka bilinirliği', 'Yazılım hataları'],
        buyingTips: ['En yakın servis mesafesini araştırın']
    },
    {
        id: 'mg-hs-1-5-turbo',
        slug: 'mg-hs-1-5-turbo',
        brand: 'MG',
        model: 'HS',
        variant: '1.5 Turbo',
        years: '2021-2024',
        generation: 'HS1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 8000,
        issues: [
            { id: 'hs-1', title: 'DCT Gecikmesi', description: 'Kalkışta DCT gecikmesi.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: 'Karakteristik', repairCost: '10.000 - 25.000 TL' },
            { id: 'hs-2', title: 'Yüksek Tüketim', description: 'Şehir içi 11-13 litre arası yüksek tüketim.', category: 'motor', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Yok' }
        ],
        pros: ['Fiyat/Performans', 'Geniş iç mekan', 'Zengin donanım'],
        cons: ['Yüksek tüketim', 'Servis ağı'],
        buyingTips: ['Yakıt tüketimini göze alın']
    },
    // CUPRA
    {
        id: 'cupra-formentor-1-5-tsi',
        slug: 'cupra-formentor-1-5-tsi',
        brand: 'Cupra',
        model: 'Formentor',
        variant: '1.5 TSI',
        years: '2020-2024',
        generation: 'KM',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 81,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            { id: 'formentor-1', title: 'Kangaroo Effect', description: '1.5 TSI DSG düşük hızlarda silkeleme.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '0-30.000 km', repairCost: '3.000 - 8.000 TL (Yazılım)' },
            { id: 'formentor-2', title: 'Trim Sesleri', description: 'Konsol ve kapı trimlerinden gelen sesler.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Bozuk yolda', repairCost: '2.000 - 5.000 TL' }
        ],
        pros: ['Etkileyici tasarım', 'Performans', 'Sportif sürüş'],
        cons: ['Kangaroo effect', 'Trim sesleri'],
        buyingTips: ['Soğuk motorla test edin']
    },
    {
        id: 'cupra-born-58',
        slug: 'cupra-born-58',
        brand: 'Cupra',
        model: 'Born',
        variant: '58 kWh',
        years: '2022-2024',
        generation: 'MEB',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Togg_T10X_at_Frankfurt_Motor_Show_2023.jpg/1280px-Togg_T10X_at_Frankfurt_Motor_Show_2023.jpg',
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 7500,
        issues: [
            { id: 'born-1', title: '12V Akü', description: '12V aküsünün beklenenden erken bitmesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: '20.000+ km', repairCost: '5.000 - 10.000 TL' }
        ],
        pros: ['VW ID.3 tekniği', 'Sportif tasarım', 'Hızlı şarj'],
        cons: ['12V akü hassasiyeti', 'Yüksek fiyat'],
        buyingTips: ['12V akü değişmiş mi sorun']
    },
    // ALFA ROMEO
    {
        id: 'alfa-romeo-giulia-2-0-turbo',
        slug: 'alfa-romeo-giulia-2-0-turbo',
        brand: 'Alfa Romeo',
        model: 'Giulia',
        variant: '2.0 Turbo',
        years: '2016-2024',
        generation: '952',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 72,
        totalIssues: 3,
        searchCount: 5500,
        issues: [
            { id: 'giulia-1', title: 'Turbo Valf', description: 'Turbo wastegate valfi arızası.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '25.000 - 45.000 TL' },
            { id: 'giulia-2', title: 'Süspansiyon Bilyası', description: 'Ön alt salıncak bilyalarının erken bitmesi.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '40.000+ km', repairCost: '8.000 - 15.000 TL' },
            { id: 'giulia-3', title: 'Elektrik', description: 'Çeşitli sensör hataları.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: '5.000 - 20.000 TL' }
        ],
        pros: ['En iyi sürüş hissi', 'Ferrari motoru (tuning)', 'İtalyan tasarım'],
        cons: ['Güvenilirlik sorunu', 'Yüksek bakım maliyetleri'],
        buyingTips: ['Mutlaka detaylı ekspertiz yaptırın', 'Servis geçmişini kontrol edin']
    },
    {
        id: 'alfa-romeo-stelvio-2-0-turbo',
        slug: 'alfa-romeo-stelvio-2-0-turbo',
        brand: 'Alfa Romeo',
        model: 'Stelvio',
        variant: '2.0 Turbo',
        years: '2017-2024',
        generation: '949',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 71,
        totalIssues: 2,
        searchCount: 4500,
        issues: [
            { id: 'stelvio-1', title: 'Motor Arızaları', description: 'Giulia ile aynı motor sorunları.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '25.000 - 50.000 TL' },
            { id: 'stelvio-2', title: 'Şanzıman Sesi', description: 'ZF 8HP şanzımandan gelen uğultu.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '20.000 - 40.000 TL' }
        ],
        pros: ['SUV dünyasının en sportifi', 'Çekici tasarım', 'Premium'],
        cons: ['Alfa güvenilirliği', 'Yedek parça fiyatları'],
        buyingTips: ['Uzun garantili tercih edin']
    },
    // MINI
    {
        id: 'mini-cooper-f56',
        slug: 'mini-cooper-f56',
        brand: 'Mini',
        model: 'Cooper',
        variant: 'F56',
        years: '2014-2024',
        generation: 'F56',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg/1280px-2019_Volkswagen_Passat_SEL_1.8T%2C_front_4.6.19.jpg',
        reliabilityScore: 77,
        totalIssues: 2,
        searchCount: 7000,
        issues: [
            { id: 'mini-1', title: 'Zincir Gergi', description: 'B38/B48 motorlarda zincir gergi arızası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '15.000 - 28.000 TL' },
            { id: 'mini-2', title: 'Klima Kompresör', description: 'Klima kompresörünün arızalanması.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '18.000 - 30.000 TL' }
        ],
        pros: ['İkonik tasarım', 'Go-kart hissi', 'Premium'],
        cons: ['BMW parça fiyatları', 'Dar iç mekan'],
        buyingTips: ['Zincir sesi dinleyin', 'Klimayı çalıştırın']
    },
    // TOYOTA ekstralar
    {
        id: 'toyota-rav4-hybrid',
        slug: 'toyota-rav4-hybrid',
        brand: 'Toyota',
        model: 'RAV4',
        variant: '2.5 Hybrid',
        years: '2019-2024',
        generation: 'XA50',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 93,
        totalIssues: 1,
        searchCount: 14000,
        issues: [
            { id: 'rav4-1', title: 'Fren Hissi', description: 'Rejeneratif frenin suni hissi.', category: 'fren', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Çözümsüz (Tasarım)' }
        ],
        pros: ['Toyota güvenilirliği', 'Düşük tüketim', 'AWD-i'],
        cons: ['Fren hissi alışkanlık istiyor', 'Yüksek fiyat'],
        buyingTips: ['Frenlere alışmak için yeterince test edin']
    },
    {
        id: 'toyota-yaris-cross-hybrid',
        slug: 'toyota-yaris-cross-hybrid',
        brand: 'Toyota',
        model: 'Yaris Cross',
        variant: '1.5 Hybrid',
        years: '2021-2024',
        generation: 'XP210',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/2018_Toyota_Corolla_%28MZEA12R%29_Ascent_Sport_hatchback_%282018-11-02%29_01.jpg/1280px-2018_Toyota_Corolla_%28MZEA12R%29_Ascent_Sport_hatchback_%282018-11-02%29_01.jpg',
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 12000,
        issues: [
            { id: 'yc-1', title: 'Bagaj Kapağı', description: 'Elektrikli bagaj motorunun yavaşlaması.', category: 'govde', riskLevel: 'LOW', affectedKm: '40.000+ km', repairCost: '4.000 - 8.000 TL' }
        ],
        pros: ['B-SUV referansı', 'Hibrit ekonomisi', 'Toyota kalitesi'],
        cons: ['Arka koltuk sınırlı', 'Bagaj hacmi ortalama'],
        buyingTips: ['Elektrikli bagaj çalışıyorsa sorun yok']
    },
    // DS
    {
        id: 'ds-7-crossback-puretech',
        slug: 'ds-7-crossback-puretech',
        brand: 'DS',
        model: 'DS7 Crossback',
        variant: '1.6 PureTech',
        years: '2018-2024',
        generation: 'X74',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/2019_Citroen_C3_Flair_PureTech_1.2_Front.jpg/1280px-2019_Citroen_C3_Flair_PureTech_1.2_Front.jpg',
        reliabilityScore: 76,
        totalIssues: 2,
        searchCount: 6000,
        issues: [
            { id: 'ds7-1', title: 'Triger Kayışı', description: 'PureTech wet belt sorunu (PSA kronik).', category: 'motor', riskLevel: 'HIGH', affectedKm: '50.000+ km', repairCost: '30.000 - 50.000 TL' },
            { id: 'ds7-2', title: 'EAT8 Sarsıntı', description: 'Düşük hızlarda hafif sarsıntı.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yazılım' }
        ],
        pros: ['Lüks iç mekan', 'Farklı tasarım', 'Dikkat çekici'],
        cons: ['PureTech riski', 'Servis ağı az'],
        buyingTips: ['Triger kayışı değişmiş mi?']
    },
    // Mitsubishi
    {
        id: 'mitsubishi-eclipse-cross-phev',
        slug: 'mitsubishi-eclipse-cross-phev',
        brand: 'Mitsubishi',
        model: 'Eclipse Cross',
        variant: 'PHEV',
        years: '2021-2024',
        generation: 'GK',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg/1280px-2020_Mercedes-Benz_GLC_300_d_4MATIC_%28facelift%29_front_7.7.20.jpg',
        reliabilityScore: 83,
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            { id: 'eclipse-1', title: 'Şarj Kablosu', description: 'Dahili şarj kablosunun dayanıklılık sorunu.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Kullanıma bağlı', repairCost: '3.000 - 6.000 TL' }
        ],
        pros: ['PHEV teknolojisi', 'S-AWC 4x4', 'Sessiz şehir içi'],
        cons: ['Az bilinen marka', 'Servis ağı'],
        buyingTips: ['Orijinal şarj kablosu sağlam mı?']
    },
    // SKODA
    {
        id: 'skoda-superb-1-5-tsi',
        slug: 'skoda-superb-1-5-tsi',
        brand: 'Skoda',
        model: 'Superb',
        variant: '1.5 TSI',
        years: '2015-2023',
        generation: 'Mk3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/2020_Skoda_Superb_SE_L_TDi_2.0_Front.jpg/1280px-2020_Skoda_Superb_SE_L_TDi_2.0_Front.jpg',
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 12500,
        issues: [
            { id: 'superb-1', title: 'DSG Mekatronik', description: 'DSG DQ200 kuru kavrama titreme ve mekatronik arızası.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '18.000 - 38.000 TL' },
            { id: 'superb-2', title: 'Su Pompası', description: 'TSI motorlarda su pompası sızıntısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '8.000 - 15.000 TL' }
        ],
        pros: ['D segment en büyük iç hacim', 'VW kalitesi Skoda fiyatına', 'Pratik/konforlu'],
        cons: ['DSG DQ200 riski', 'Yüksek tüketim (Şehir içi)'],
        buyingTips: ['DSG geçişlerini test edin', 'Su pompası değişmiş mi bakın']
    },
    {
        id: 'skoda-octavia-1-5-tsi',
        slug: 'skoda-octavia-1-5-tsi',
        brand: 'Skoda',
        model: 'Octavia',
        variant: '1.5 TSI e-Tec',
        years: '2020-2024',
        generation: 'Mk4 (NX)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/2020_Skoda_Octavia_SE_First_Edition_2.0_Front.jpg/1280px-2020_Skoda_Octavia_SE_First_Edition_2.0_Front.jpg',
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            { id: 'octavia-1', title: 'Kangaroo Effect', description: '1.5 TSI e-Tec soğuk motorla silkeleme.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '0-30.000 km', repairCost: '3.000 - 8.000 TL (Yazılım)' },
            { id: 'octavia-2', title: 'Infotainment', description: 'Multimedya sistemi donmaları.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '2.000 - 5.000 TL' }
        ],
        pros: ['Segment en geniş iç hacim', 'Ekonomik mild hibrit', 'VW MQB Evo'],
        cons: ['Yazılım sorunları', 'Trim sesleri'],
        buyingTips: ['Soğuk motorla test edin']
    },
    {
        id: 'skoda-kamiq-1-0-tsi',
        slug: 'skoda-kamiq-1-0-tsi',
        brand: 'Skoda',
        model: 'Kamiq',
        variant: '1.0 TSI',
        years: '2019-2024',
        generation: 'NW',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Skoda_Kamiq_Style_1.0_TSI_DSG_-_f_15092019.jpg/1280px-Skoda_Kamiq_Style_1.0_TSI_DSG_-_f_15092019.jpg',
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 8000,
        issues: [
            { id: 'kamiq-1', title: 'DSG Gecikmesi', description: 'DQ200 kalkışta gecikme.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Karakteristik', repairCost: 'Yazılım' }
        ],
        pros: ['Pratik boyutlar', 'Geniş bagaj', 'VW altyapısı'],
        cons: ['Sert süspansiyon', 'Yol gürültüsü'],
        buyingTips: ['Manuel tercih edin (DSG yerine)']
    },
    {
        id: 'skoda-scala-1-0-tsi',
        slug: 'skoda-scala-1-0-tsi',
        brand: 'Skoda',
        model: 'Scala',
        variant: '1.0 TSI',
        years: '2019-2024',
        generation: 'NW',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Skoda_Scala_IMG_4227.jpg/1280px-Skoda_Scala_IMG_4227.jpg',
        reliabilityScore: 83,
        totalIssues: 1,
        searchCount: 7500,
        issues: [
            { id: 'scala-1', title: 'Triger Zinciri', description: '1.0 TSI motorlarda zincir gergi sesi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '10.000 - 20.000 TL' }
        ],
        pros: ['Büyük bagaj (467L)', 'Modern tasarım', 'Ekonomik'],
        cons: ['Zincir gergi riski', 'Sert plastikler'],
        buyingTips: ['Motor çalışırken zincir sesi var mı dinleyin']
    },
    // POPULAR TRENDING CARS
    {
        id: 'bmw-3-serisi-f30-320i',
        slug: 'bmw-3-serisi-f30-320i',
        brand: 'BMW',
        model: '3 Serisi',
        variant: 'F30 320i',
        years: '2012-2018',
        generation: 'F30',
        image: '/cars/bmw-3-series-f30.png',
        price: 2400000,
        reliabilityScore: 70,
        totalIssues: 6,
        searchCount: 28000,
        issues: [
            { id: 'f30-1', title: 'Zincir Gergi', description: 'N20 motorlarda zincir gergi arızası.', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '25.000 - 45.000 TL' },
            { id: 'f30-2', title: 'Yağ Sızıntısı', description: 'Vanos ve turbo hattından yağ sızması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '10.000 - 20.000 TL' },
            { id: 'f30-3', title: 'Şanzıman Sarsıntı', description: 'ZF 8HP şanzımanda düşük hızlarda sarsıntı.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '15.000 - 30.000 TL' }
        ],
        pros: ['Sürüş dinamikleri', 'Premium hissiyat', 'Arka çeker keyfi'],
        cons: ['N20 zincir riski', 'Yüksek bakım maliyetleri', 'Run-flat lastik sertliği'],
        buyingTips: ['Zincir sesini mutlaka dinleyin', 'Motor altında yağ izi var mı bakın']
    },
    {
        id: 'bmw-5-serisi-f10-520i',
        slug: 'bmw-5-serisi-f10-520i',
        brand: 'BMW',
        model: '5 Serisi',
        variant: 'F10 520i',
        years: '2010-2016',
        generation: 'F10',
        image: '/cars/bmw-5-series-f10.png',
        price: 2800000,
        reliabilityScore: 68,
        totalIssues: 8,
        searchCount: 22000,
        issues: [
            { id: 'f10-1', title: 'N20 Zincir', description: 'Aynı zincir gergi sorunu.', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '25.000 - 50.000 TL' },
            { id: 'f10-2', title: 'Hava Süspansiyonu', description: 'Air body control arızası.', category: 'suspansiyon', riskLevel: 'HIGH', affectedKm: '100.000+ km', repairCost: '30.000 - 60.000 TL' },
            { id: 'f10-3', title: 'Turbo Wastegate', description: 'Turbo wastegate valfi arızası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '15.000 - 30.000 TL' }
        ],
        pros: ['Yönetici sedan konforu', 'Geniş iç mekan', 'Uzun yol gemisi'],
        cons: ['Ağır bakım masrafları', 'N20 zincir', 'Hava süspansiyon riski'],
        buyingTips: ['Hava süspansiyonlu değilse tercih edin', 'N20 zincir kontrolü şart']
    },
    {
        id: 'bmw-5-serisi-f10-520d',
        slug: 'bmw-5-serisi-f10-520d',
        brand: 'BMW',
        model: '5 Serisi',
        variant: 'F10 520d',
        years: '2010-2016',
        generation: 'F10',
        image: '/cars/bmw-5-series-f10.png',
        price: 3100000,
        reliabilityScore: 75,
        totalIssues: 5,
        searchCount: 20000,
        issues: [
            { id: 'f10d-1', title: 'Turbo Şarj', description: 'Turbo karteri yağ sızıntısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '120.000+ km', repairCost: '12.000 - 25.000 TL' },
            { id: 'f10d-2', title: 'EGR Valfi', description: 'EGR valfi tıkanması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '8.000 - 15.000 TL' }
        ],
        pros: ['Dizel ekonomisi', 'Daha güvenilir N47', 'Yüksek tork'],
        cons: ['DPF bakımı', 'EGR tıkanması'],
        buyingTips: ['Dizel tercih edin (N47 daha sağlam)']
    },
    {
        id: 'volkswagen-passat-b8-1-6-tdi',
        slug: 'volkswagen-passat-b8-1-6-tdi',
        brand: 'Volkswagen',
        model: 'Passat',
        variant: 'B8 1.6 TDI',
        years: '2015-2020',
        generation: 'B8 (3G)',
        image: '/cars/volkswagen-passat-b8.png',
        price: 2100000,
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 26000,
        issues: [
            { id: 'passat-b8-1', title: 'DSG Mekatronik', description: 'DQ200 kuru kavrama mekatronik arızası.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '18.000 - 35.000 TL' },
            { id: 'passat-b8-2', title: 'AdBlue', description: 'AdBlue dozajlama hatası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '15.000 - 28.000 TL' }
        ],
        pros: ['En iyi D segment sedan', 'Geniş iç mekan', 'Ekonomik dizel'],
        cons: ['DQ200 riski', 'AdBlue (2016 sonrası)'],
        buyingTips: ['DSG şanzımanı test edin', 'AdBlue sistemi kontrol']
    },
    {
        id: 'tesla-model-y-long-range',
        slug: 'tesla-model-y-long-range',
        brand: 'Tesla',
        model: 'Model Y',
        variant: 'Long Range',
        years: '2022-2024',
        generation: 'Mk1',
        image: '/cars/tesla-model-y.png',
        price: 2750000,
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 24000,
        issues: [
            { id: 'modely-1', title: 'Panel Uyumu', description: 'Kapı ve kaput panellerinde boşluk farklılıkları.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Fabrika çıkışı', repairCost: 'Servis ayarı' },
            { id: 'modely-2', title: '12V Akü', description: '12V yardımcı aküsünün erken bitmesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: '40.000+ km', repairCost: '8.000 - 15.000 TL' }
        ],
        pros: ['507 km menzil', 'Süpercharger ağı', 'Otonom sürüş'],
        cons: ['Panel kalitesi tartışmalı', 'Servis yetersiz'],
        buyingTips: ['Panel boşluklarını kontrol edin', '12V akü durumu']
    },
    {
        id: 'skoda-superb-1-6-tdi',
        slug: 'skoda-superb-1-6-tdi',
        brand: 'Skoda',
        model: 'Superb',
        variant: '1.6 TDI',
        years: '2015-2020',
        generation: 'Mk3',
        image: '/cars/skoda-superb.png',
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 19500,
        issues: [
            { id: 'superb16-1', title: 'DSG DQ200', description: 'Kuru kavrama titreme.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '18.000 - 35.000 TL' },
            { id: 'superb16-2', title: 'EGR Valfi', description: 'EGR tıkanması ve motor uyarısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '6.000 - 12.000 TL' }
        ],
        pros: ['Segment en büyük iç hacim', 'Ekonomik dizel', 'VW kalitesi'],
        cons: ['DQ200 risk', 'EGR tıkanma'],
        buyingTips: ['DSG vites geçişlerini test edin']
    },
    // BATCH 1: POPULAR HATCHBACKS & SEDANS (ADDED FEB 2026)
    {
        id: 'vw-golf-7-14tsi',
        slug: 'volkswagen-golf-7-1-4-tsi',
        brand: 'Volkswagen',
        model: 'Golf',
        variant: '1.4 TSI Highline',
        years: '2012-2020',
        generation: 'Mk7',
        image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80',
        price: 1550000,
        reliabilityScore: 88,
        totalIssues: 3,
        searchCount: 22000,
        issues: [
            { id: 'golf7-1', title: 'DSG Mekatronik', description: 'Vites geçişlerinde kararsızlık ve titreme. Basınç tüpü değişimi gerekebilir.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '25.000 - 45.000 TL' },
            { id: 'golf7-2', title: 'Devirdaim Pompası', description: 'Su kaçağı ve soğutma sıvısı eksiltme.', category: 'motor', riskLevel: 'LOW', affectedKm: '90.000+ km', repairCost: '5.000 - 10.000 TL' },
            { id: 'golf7-3', title: 'Multimedya Dokunmatik', description: 'Ekranın bazı bölgelerinde dokunmatik hassasiyeti kaybı.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '3.000 - 8.000 TL' }
        ],
        pros: ['Yalıtım', 'Kalite algısı', 'İkinci el değeri'],
        cons: ['DSG masraf riski', 'Yüksek bakım maliyeti'],
        buyingTips: ['DSG kavramasının durumunu ekspertizde kontrol ettirin.']
    },
    {
        id: 'ford-focus-3-5-tdci',
        slug: 'ford-focus-3-5-1-5-tdci',
        brand: 'Ford',
        model: 'Focus',
        variant: '3.5 1.5 TDCi Titanium',
        years: '2014-2018',
        generation: 'Mk3.5',
        image: 'https://images.unsplash.com/photo-1627454819213-f77f54c93540?auto=format&fit=crop&q=80',
        price: 1350000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 18500,
        issues: [
            { id: 'focus35-1', title: 'Powershift Şanzıman', description: 'Özellikle benzinli modellerde kavrama sorunları (Dizel tork konvertörlüdür, daha sağlamdır).', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '30.000 - 50.000 TL' },
            { id: 'focus35-2', title: 'Direksiyon Kutusu', description: 'Direksiyonda boşluk ve ses.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '120.000+ km', repairCost: '15.000 - 25.000 TL' }
        ],
        pros: ['Yol tutuş referansı', 'Güçlü dizel motor', 'Sessiz kabin'],
        cons: ['Arka diz mesafesi dar', 'Bagaj hacmi rakiplerinden az'],
        buyingTips: ['Otomatik şanzımanın vites geçişlerini yokuşta deneyin.']
    },
    {
        id: 'opel-astra-k-14t',
        slug: 'opel-astra-k-1-4-turbo',
        brand: 'Opel',
        model: 'Astra',
        variant: 'K 1.4 Turbo Excellence',
        years: '2015-2021',
        generation: 'K',
        image: 'https://images.unsplash.com/photo-1552556221-5c1743f11d29?auto=format&fit=crop&q=80',
        price: 1400000,
        reliabilityScore: 78,
        totalIssues: 3,
        searchCount: 14200,
        issues: [
            { id: 'astrak-1', title: 'LSPI (Piston Kırma)', description: 'Düşük devirde yüksek yük altında piston segmanlarında hasar riski (Dexos1 Gen2 yağ kullanılmalı).', category: 'motor', riskLevel: 'HIGH', affectedKm: 'Rastgele', repairCost: '60.000 - 100.000 TL' },
            { id: 'astrak-2', title: 'Matrix LED Far', description: 'Far beyni arızası veya led modüllerin sönmesi.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: '5+ Yıl', repairCost: '20.000 - 40.000 TL' },
            { id: 'astrak-3', title: 'Direksiyon Kolon Kilidi', description: 'Aracın çalışmamasına neden olan elektronik kilit arızası.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: '8.000 - 15.000 TL' }
        ],
        pros: ['Matrix LED farlar', 'Performans', 'Şık tasarım'],
        cons: ['Piston kırma riski (yağ seçimi kritik)', 'Trim sesleri'],
        buyingTips: ['Yetkili servis bakımlı olmasına ve doğru yağ (Dexos1 Gen2) kullanılmasına dikkat edin.']
    },
    {
        id: 'seat-leon-mk3-tdi',
        slug: 'seat-leon-mk3-1-6-tdi',
        brand: 'Seat',
        model: 'Leon',
        variant: '1.6 TDI FR',
        years: '2013-2020',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&q=80',
        price: 1450000,
        reliabilityScore: 84,
        totalIssues: 3,
        searchCount: 19000,
        issues: [
            { id: 'leon3-1', title: 'Trim Sesleri', description: 'Kapı içlerinden ve sunroof\'tan gelen tıkırtılar.', category: 'govde', riskLevel: 'LOW', affectedKm: '30.000+ km', repairCost: '1.000 - 3.000 TL' },
            { id: 'leon3-2', title: 'Su Devirdaim', description: 'Termostat veya devirdaim kaynaklı su eksiltme.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '4.000 - 9.000 TL' },
            { id: 'leon3-3', title: 'DSG Kavrama', description: 'Titreme ve vuruntu.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '70.000+ km', repairCost: '25.000 - 40.000 TL' }
        ],
        pros: ['Genç tasarım', 'Led farlar', 'Performans'],
        cons: ['Sert süspansiyon', 'Yalıtım Golf\'ten zayıf'],
        buyingTips: ['Sunroof fitillerini ve trim seslerini test sürüşünde dinleyin.']
    },
    {
        id: 'renault-clio-4-dci',
        slug: 'renault-clio-4-1-5-dci',
        brand: 'Renault',
        model: 'Clio',
        variant: '4 1.5 dCi Icon',
        years: '2012-2019',
        generation: 'IV',
        image: 'https://images.unsplash.com/photo-1621510459385-05d52723d772?auto=format&fit=crop&q=80',
        price: 950000,
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 28000,
        issues: [
            { id: 'clio4-1', title: 'Rüzgar Sesi', description: '90 km/s üzeri hızlarda ayna diplerinden rüzgar sesi alır.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: 'Çözümsüz/Fitil' },
            { id: 'clio4-2', title: 'EDC Beyni', description: 'Vites kutusu beyni nadiren arıza yapabilir.', category: 'sanziman', riskLevel: 'LOW', affectedKm: '150.000+ km', repairCost: '15.000 - 25.000 TL' }
        ],
        pros: ['Yakıt cimrisi', 'Şık tasarım', 'İkinci el hızı'],
        cons: ['Plastik kalitesi', 'Arka camlar manuel (baz donanım)', 'Rüzgar sesi'],
        buyingTips: ['Triger setinin 80.000 km veya 4 yılda bir değiştiğinden emin olun.']
    },
    {
        id: 'hyundai-i20-mpi',
        slug: 'hyundai-i20-1-4-mpi',
        brand: 'Hyundai',
        model: 'i20',
        variant: '1.4 MPI Style',
        years: '2014-2020',
        generation: 'GB',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1050000,
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 16000,
        issues: [
            { id: 'i20-1', title: 'Debriyaj Bilyası', description: 'Manuel viteslerde debriyajdan gelen ses.', category: 'sanziman', riskLevel: 'LOW', affectedKm: '60.000+ km', repairCost: '5.000 - 10.000 TL' }
        ],
        pros: ['Sorunsuzluk', 'Geniş iç hacim', 'Cam tavan opsiyonu'],
        cons: ['Yakıt tüketimi (Otomatik)', 'Performans (Atmosferik)'],
        buyingTips: ['LPG uyumu tamdır, yakıt tasarrufu için LPG\'li bakılabilir.']
    },
    {
        id: 'toyota-yaris-hybrid',
        slug: 'toyota-yaris-1-5-hybrid',
        brand: 'Toyota',
        model: 'Yaris',
        variant: '1.5 Hybrid Dream',
        years: '2020-2024',
        generation: 'XP210',
        image: 'https://images.unsplash.com/photo-1629897143493-4e45c4795992?auto=format&fit=crop&q=80',
        price: 1450000,
        reliabilityScore: 96,
        totalIssues: 0,
        searchCount: 11000,
        issues: [],
        pros: ['Şehir içi yakıt (3.5L)', 'Sorunsuzluk', 'Güvenlik domanımı'],
        cons: ['Arka yaşam alanı dar', 'Bagaj küçük', 'Yol sesi'],
        buyingTips: ['Hybrid pil garantisinin devam ettiğini servisten sorgulayın (10 yıla kadar uzar).']
    },
    {
        id: 'honda-jazz-ivtec',
        slug: 'honda-jazz-1-3-ivtec',
        brand: 'Honda',
        model: 'Jazz',
        variant: '1.3 i-VTEC Elegance',
        years: '2015-2020',
        generation: 'GK',
        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80',
        price: 1250000,
        reliabilityScore: 95,
        totalIssues: 1,
        searchCount: 5000,
        issues: [
            { id: 'jazz-1', title: 'CVT Titreme', description: 'Şanzıman yağı zamanında değişmezse kalkışta titreme.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Bakımsızsa', repairCost: '5.000 - 15.000 TL' }
        ],
        pros: ['Sihirli Koltuklar (Bagaj)', 'Görüş açısı', 'Sorunsuzluk'],
        cons: ['Yalıtım zayıf', 'Süspansiyon sert'],
        buyingTips: ['CVT şanzıman yağının değişim periyodunu (40.000 km) kontrol edin.']
    },
    {
        id: 'peugeot-208-puretech',
        slug: 'peugeot-208-1-2-puretech',
        brand: 'Peugeot',
        model: '208',
        variant: '1.2 PureTech Allure',
        years: '2019-2024',
        generation: 'P21',
        image: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?auto=format&fit=crop&q=80',
        price: 1200000,
        reliabilityScore: 82,
        totalIssues: 2,
        searchCount: 13000,
        issues: [
            { id: '208-1', title: 'Triger Kayışı', description: 'Kayışın yağ içinde çalışması nedeniyle ufalanıp yağ pompasını tıkaması (Eski serilerde).', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '20.000 - 40.000 TL' },
            { id: '208-2', title: 'AdBlue Arızası', description: 'Dizel versiyonlarda tank değişimi gerekebilir.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '15.000 - 25.000 TL' }
        ],
        pros: ['i-Cockpit tasarım', 'Yol tutuş', '8 ileri EAT8 şanzıman'],
        cons: ['Arka alan dar', 'Direksiyon göstergeyi kapatabiliyor (Boy\'a göre)'],
        buyingTips: ['Triger kayışının durumunu yağ kapağından kontrol ettirin (Şişme/çatlama var mı).']
    },
    {
        id: 'citroen-c3-puretech',
        slug: 'citroen-c3-1-2-puretech',
        brand: 'Citroen',
        model: 'C3',
        variant: '1.2 Shine',
        years: '2016-2024',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1626830588632-4740d9976378?auto=format&fit=crop&q=80',
        price: 1100000,
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 9500,
        issues: [
            { id: 'c3-1', title: 'Amortisör Sesi', description: 'Ön amortisörlerden gelen lokurtu.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '40.000+ km', repairCost: '3.000 - 6.000 TL' },
            { id: 'c3-2', title: 'Yağ Eksiltme', description: '1.2 motorlarda belirli serilerde yağ yakma.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: 'Motor Revizyonu' }
        ],
        pros: ['Konforlu koltuklar', 'Kişiselleştirme', 'Yumuşak süspansiyon'],
        cons: ['Viraj performansı (Yatıyor)', 'Multimedya yavaş'],
        buyingTips: ['Airbump\'ların durumuna ve kapı altlarında hasar olup olmadığına bakın.']
    },
    {
        id: 'dacia-sandero-stepway',
        slug: 'dacia-sandero-stepway-0-9-tce',
        brand: 'Dacia',
        model: 'Sandero',
        variant: 'Stepway 0.9 TCe',
        years: '2012-2020',
        generation: 'Mk2',
        image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&q=80',
        price: 900000,
        reliabilityScore: 87,
        totalIssues: 1,
        searchCount: 21000,
        issues: [
            { id: 'sandero-1', title: 'Termostat Yuvası', description: 'Plastik yuvanın çatlaması ve su kaçağı.', category: 'motor', riskLevel: 'LOW', affectedKm: '80.000+ km', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Yüksek alt yapı', 'Ucuz parça', 'LPG uyumu'],
        cons: ['Güvenlik (Yıldız)', 'Yalıtım yok', 'Konfor zayıf'],
        buyingTips: ['Easy-R robotize şanzımandan kaçınıp manuel tercih etmek daha sorunsuzdur.']
    },
    {
        id: 'vw-polo-6r',
        slug: 'volkswagen-polo-6r-1-4-tdi',
        brand: 'Volkswagen',
        model: 'Polo',
        variant: '1.4 TDI Comfortline',
        years: '2009-2017',
        generation: '6R',
        image: 'https://images.unsplash.com/photo-1620884102986-a97918a56d81?auto=format&fit=crop&q=80',
        price: 980000,
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 24000,
        issues: [
            { id: 'polo-1', title: 'EGR Tıkanıklığı', description: 'Dizel motorlarda EGR valfi arızası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '70.000+ km', repairCost: '5.000 - 10.000 TL' },
            { id: 'polo-2', title: 'Kapı Kilitleri', description: 'Kapıların kilitlenmemesi veya açılmaması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Yaşa bağlı', repairCost: '2.000 - 5.000 TL' }
        ],
        pros: ['Kalite', 'Yakıt', 'Değer koruma'],
        cons: ['Dar arka yaşam', 'DSG riski', 'Donanım fakiri'],
        buyingTips: ['Enjektör sesini dinleyin, 1.4 TDI motorlar biraz sesli çalışır ama vuruntu olmamalı.']
    },
    {
        id: 'skoda-octavia-a7',
        slug: 'skoda-octavia-a7-1-6-tdi',
        brand: 'Skoda',
        model: 'Octavia',
        variant: 'A7 1.6 TDI Style',
        years: '2013-2020',
        generation: 'A7',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80',
        price: 1350000,
        reliabilityScore: 87,
        totalIssues: 2,
        searchCount: 17500,
        issues: [
            { id: 'octavia-1', title: 'Su Pompası', description: 'Devirdaim su kaçağı (Kronik VW grubu).', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '90.000+ km', repairCost: '5.000 - 10.000 TL' },
            { id: 'octavia-2', title: 'DSG Mekatronik', description: 'Şanzıman kartı arızası.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '25.000 - 45.000 TL' }
        ],
        pros: ['Devasa bagaj (Liftback)', 'Geniş arka diz mesafesi', 'Fiyat/Performans'],
        cons: ['Rüzgar sesi (Ayna)', 'Süspansiyon sesli çalışıyor'],
        buyingTips: ['Aile için en mantıklı sedan. Bagaj havuzunu kontrol edin.']
    },
    {
        id: 'honda-city-new',
        slug: 'honda-city-1-5-ivtec',
        brand: 'Honda',
        model: 'City',
        variant: '1.5 i-VTEC Executive',
        years: '2021-2024',
        generation: 'GN',
        image: 'https://images.unsplash.com/photo-1609520857022-c351f041d87e?auto=format&fit=crop&q=80',
        price: 1150000,
        reliabilityScore: 90,
        totalIssues: 0,
        searchCount: 8000,
        issues: [],
        pros: ['Geniş iç hacim', 'Sorunsuz motor/şanzıman', 'Yakıt'],
        cons: ['Yalıtım çok zayıf', 'Malzeme kalitesi düşük', 'Frenler (Kampana arka)'],
        buyingTips: ['Yalıtım eksikliğini bilerek alın, şehir içi için mükemmeldir.']
    },
    {
        id: 'fiat-linea-mjet',
        slug: 'fiat-linea-1-3-multijet',
        brand: 'Fiat',
        model: 'Linea',
        variant: '1.3 MultiJet Emotion',
        years: '2007-2015',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 750000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 35000,
        issues: [
            { id: 'linea-1', title: 'Zincir Sesi', description: 'Triger zincirinin uzaması ve ses yapması (Koparsa motor biter).', category: 'motor', riskLevel: 'HIGH', affectedKm: '120.000+ km', repairCost: '10.000 - 20.000 TL' },
            { id: 'linea-2', title: 'Amortisör Takozu', description: 'Direksiyonu çevirirken gelen gıcırtı.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '50.000+ km', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Parça ucuzluğu', 'Bakım kolaylığı', 'Piyasa'],
        cons: ['Konfor', 'Güvenlik', 'Yüksek KM'],
        buyingTips: ['Taksi çıkması olup olmadığını TRAMER ve KM kayıtlarından çok iyi araştırın.']

    },
    // BATCH 2: SUVS & CROSSOVERS (ADDED FEB 2026)
    {
        id: 'peugeot-3008-bluehdi',
        slug: 'peugeot-3008-1-5-bluehdi',
        brand: 'Peugeot',
        model: '3008',
        variant: '1.5 BlueHDi Allure',
        years: '2016-2023',
        generation: 'P84',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
        price: 1850000,
        reliabilityScore: 81,
        totalIssues: 2,
        searchCount: 32000,
        issues: [
            { id: '3008-1', title: 'AdBlue Kristalleşme', description: 'AdBlue deposunun tıkanması ve komple değişim gerektirmesi.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '25.000 - 40.000 TL' },
            { id: '3008-2', title: 'Kaput Dalgalanması', description: 'Yüksek hızda kaputun titremesi (Aerodinamik hata).', category: 'govde', riskLevel: 'LOW', affectedKm: '120+ km/s', repairCost: 'Çözümsüz/Ayar' }
        ],
        pros: ['i-Cockpit', 'Fütüristik tasarım', 'İkinci el piyasası'],
        cons: ['AdBlue sorunu', 'Arka süspansiyon sert (Torsiyon)'],
        buyingTips: ['AdBlue iptali yapılıp yapılmadığını veya deponun değişip değişmediğini sorun.']
    },
    {
        id: 'nissan-qashqai-j11',
        slug: 'nissan-qashqai-j11-1-5-dci',
        brand: 'Nissan',
        model: 'Qashqai',
        variant: 'J11 1.5 dCi Sky Pack',
        years: '2014-2021',
        generation: 'J11',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1650000,
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 45000,
        issues: [
            { id: 'qashqai-1', title: 'Turbo Hortumu', description: 'Turbo hortumunun patlaması ve güç kaybı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '3.000 - 6.000 TL' },
            { id: 'qashqai-2', title: 'Start-Stop Hatası', description: 'Akü zayıflığına bağlı sistem hatası.', category: 'elektronik', riskLevel: 'LOW', affectedKm: '3-4 Yıl', repairCost: '5.000 - 8.000 TL' }
        ],
        pros: ['Piyasa lideri', 'Panoramik cam tavan', 'Yakıt'],
        cons: ['Multimedya eski', 'Rüzgar sesi'],
        buyingTips: ['Turbo hortumunun orijinal olup olmadığını kontrol edin (Yan sanayi çabuk patlar).']
    },
    {
        id: 'hyundai-tucson-tgdi',
        slug: 'hyundai-tucson-1-6-tgdi',
        brand: 'Hyundai',
        model: 'Tucson',
        variant: '1.6 T-GDI Elite',
        years: '2020-2024',
        generation: 'NX4',
        image: 'https://images.unsplash.com/photo-1622323385688-6677fec595ce?auto=format&fit=crop&q=80',
        price: 1950000,
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 38000,
        issues: [
            { id: 'tucson-1', title: 'DCT Isınma', description: 'Yoğun trafikte şanzıman ısınma uyarısı.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Trafik', repairCost: 'Kullanıcı Hatası' },
            { id: 'tucson-2', title: 'GPF Tıkanıklığı', description: 'Benzin partikül filtresi uyarısı (Kısa mesafe kullanımı).', category: 'motor', riskLevel: 'LOW', affectedKm: 'Şehir içi', repairCost: 'Rejenerasyon (Ücretsiz)' }
        ],
        pros: ['Tasarım', 'Donanım zenginliği', 'Geniş iç hacim'],
        cons: ['Yakıt tüketimi (10L+)', 'Bagaj kapağı yavaş'],
        buyingTips: ['Yakıt tüketimini göze alarak alın, LPG uyumlu değildir (Direkt enjeksiyon).']
    },
    {
        id: 'dacia-duster-tce',
        slug: 'dacia-duster-1-3-tce',
        brand: 'Dacia',
        model: 'Duster',
        variant: '1.3 TCe Prestige',
        years: '2018-2024',
        generation: 'Mk2',
        image: 'https://images.unsplash.com/photo-1606101297669-07b949b289cf?auto=format&fit=crop&q=80',
        price: 1250000,
        reliabilityScore: 83,
        totalIssues: 2,
        searchCount: 29000,
        issues: [
            { id: 'duster-1', title: 'Direksiyon Kutusu', description: 'Direksiyondan gelen sesler ve boşluk.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '10.000 - 15.000 TL' },
            { id: 'duster-2', title: 'Yakıt Şamandırası', description: 'Göstergenin yanlış göstermesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Fiyat/Performans', 'Mercedes motoru (1.3 TCe)', 'Arazi yeteneği'],
        cons: ['Yalıtım zayıf', 'Güvenlik (3 Yıldız)', 'Koltuk konforu'],
        buyingTips: ['1.3 TCe motorun performansı şaşırtıcıdır, test edin.']
    },
    {
        id: 'vw-tiguan-tsi',
        slug: 'volkswagen-tiguan-1-5-tsi',
        brand: 'Volkswagen',
        model: 'Tiguan',
        variant: '1.5 TSI Life',
        years: '2016-2023',
        generation: 'Mk2',
        image: 'https://images.unsplash.com/photo-1541348263346-646732f913d1?auto=format&fit=crop&q=80',
        price: 2100000,
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 25000,
        issues: [
            { id: 'tiguan-1', title: 'DSG Titreme', description: 'Kalkışlarda titreme (Kavrama aşınması).', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '70.000+ km', repairCost: '25.000 - 40.000 TL' }
        ],
        pros: ['Kalite', 'İkinci el değeri', 'Genişlik'],
        cons: ['Fiyat', 'Donanım opsiyonel'],
        buyingTips: ['Highline/Elegance donanım cam tavansız alınmaz (Piyasa kuralı).']
    },
    {
        id: 'kia-sportage-nqy5',
        slug: 'kia-sportage-1-6-crdi',
        brand: 'Kia',
        model: 'Sportage',
        variant: '1.6 CRDi Mild Hybrid',
        years: '2021-2024',
        generation: 'NQ5',
        image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80',
        price: 2050000,
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 22000,
        issues: [
            { id: 'sportage-1', title: 'PPF Sensörü', description: 'Egzoz/Partikül sensörü hatası.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Garantiden' }
        ],
        pros: ['Tasarım', 'Kavisli ekran', 'Dizel ekonomi'],
        cons: ['Arka sinyaller tamponda (Görünürlük)', 'Bagaj eşiği yüksek'],
        buyingTips: ['Prestige donanım Harman Kardon ses sistemiyle tercih edilmeli.']
    },
    {
        id: 'peugeot-2008-puretech',
        slug: 'peugeot-2008-1-2-puretech',
        brand: 'Peugeot',
        model: '2008',
        variant: '1.2 PureTech GT',
        years: '2019-2024',
        generation: 'P24',
        image: 'https://images.unsplash.com/photo-1617431268393-27c15275817c?auto=format&fit=crop&q=80',
        price: 1550000,
        reliabilityScore: 83,
        totalIssues: 2,
        searchCount: 26000,
        issues: [
            { id: '2008-1', title: 'Triger Kayışı', description: 'Yağ içinde çalışan kayışın deformasyonu (Kontrol şart).', category: 'motor', riskLevel: 'HIGH', affectedKm: '50.000+ km', repairCost: '20.000 TL' },
            { id: '2008-2', title: 'Multimedya Donma', description: 'Ekranın siyah olması veya donması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Yazılımsal', repairCost: 'Güncelleme' }
        ],
        pros: ['3 boyutlu gösterge', 'Aslan dişi farlar', 'Yol tutuş'],
        cons: ['Arka süspansiyon sert', 'Motor sesi kabinde'],
        buyingTips: ['GT donanımda gelen 3D kokpit çok etkileyicidir, giriş paketi sönük kalır.']
    },
    {
        id: 'opel-mokka-b',
        slug: 'opel-mokka-1-2-turbo',
        brand: 'Opel',
        model: 'Mokka',
        variant: '1.2 Turbo GS Line',
        years: '2020-2024',
        generation: 'B',
        image: 'https://images.unsplash.com/photo-1629897143493-4e45c4795992?auto=format&fit=crop&q=80',
        price: 1480000,
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 15000,
        issues: [
            { id: 'mokka-1', title: 'Start Stop', description: 'Devreye girmeme sorunu (Akü kaynaklı).', category: 'elektronik', riskLevel: 'LOW', affectedKm: '2-3 Yıl', repairCost: 'Akşam Değişimi' }
        ],
        pros: ['Vizör tasarım', 'Genç hedef kitle', 'Atiklik'],
        cons: ['İç mekan çok dar', 'Arka camlar küçük (klostrofobik)', 'Bagaj küçük'],
        buyingTips: ['Arka koltuk diz mesafesini mutlaka deneyin, aileye uygun olmayabilir.']
    },
    {
        id: 'citroen-c5-aircross',
        slug: 'citroen-c5-aircross-1-5-bluehdi',
        brand: 'Citroen',
        model: 'C5 Aircross',
        variant: '1.5 BlueHDi Shine',
        years: '2019-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1750000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 20000,
        issues: [
            { id: 'c5a-1', title: 'AdBlue Pompası', description: 'AdBlue sistemi arızası (Grup geneli sorun).', category: 'motor', riskLevel: 'HIGH', affectedKm: '70.000+ km', repairCost: '30.000 TL' },
            { id: 'c5a-2', title: 'Bagaj Kapağı', description: 'Elektrikli bagajın açılmaması veya yarıda kalması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '5.000 TL' }
        ],
        pros: ['Uçan halı süspansiyon', 'Bağımsız 3 arka koltuk', 'Sessizlik'],
        cons: ['Virajda yatma', 'Multimedya tuşları dokunmatik (kullanışsız)'],
        buyingTips: ['Konfor odaklıysanız sınıfının en iyisidir.']
    },
    {
        id: 'skoda-kamiq',
        slug: 'skoda-kamiq-1-0-tsi',
        brand: 'Skoda',
        model: 'Kamiq',
        variant: '1.0 TSI Premium',
        years: '2019-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80',
        price: 1450000,
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 16000,
        issues: [
            { id: 'kamiq-1', title: 'Debriyaj Sesi', description: 'DSG şanzımanda 1-2 geçişinde tıkırtı.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Yok', repairCost: 'Normal Kabul Edilir' }
        ],
        pros: ['Sınıfın en genişi', 'Kayar sinyaller', 'Akıllı çözümler'],
        cons: ['Sert plastikler', 'Klima menüsü ekranda'],
        buyingTips: ['Cam tavan perdesinin sarkıp sarkmadığını kontrol edin.']
    },
    {
        id: 'ford-kuga-ecoblue',
        slug: 'ford-kuga-1-5-ecoblue',
        brand: 'Ford',
        model: 'Kuga',
        variant: '1.5 EcoBlue ST-Line',
        years: '2020-2024',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1627454819213-f77f54c93540?auto=format&fit=crop&q=80',
        price: 1900000,
        reliabilityScore: 87,
        totalIssues: 1,
        searchCount: 18000,
        issues: [
            { id: 'kuga-1', title: '12V Akü', description: 'Aracın çalışmamasına neden olan akü bitirme sorunu.', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: 'Akü Değişimi' }
        ],
        pros: ['Sürüş dinamiği', 'Kaydırılabilir arka koltuk', 'Sessiz dizel'],
        cons: ['Döner vites seçici alışkanlık ister', 'Bagaj normal'],
        buyingTips: ['ST-Line süspansiyonu biraz serttir, konfor için Titanium bakın.']
    },
    {
        id: 'renault-captur-2',
        slug: 'renault-captur-1-3-tce',
        brand: 'Renault',
        model: 'Captur',
        variant: '1.3 TCe Icon',
        years: '2020-2024',
        generation: 'II',
        image: 'https://images.unsplash.com/photo-1621510459385-05d52723d772?auto=format&fit=crop&q=80',
        price: 1350000,
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 23000,
        issues: [
            { id: 'captur-1', title: 'Start Stop', description: 'Devreye girmeme.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Aküye bağlı', repairCost: 'Akü' }
        ],
        pros: ['Kaliteli iç mekan (Eskiye göre)', 'Mercedes motoru', 'Bagaj'],
        cons: ['Multimedya bazen yavaş', 'EDC kararsızlığı'],
        buyingTips: ['Çift renk tavanlı modeller ikinci elde daha hızlı satılır.']
    },
    {
        id: 'chery-tiggo-8-pro',
        slug: 'chery-tiggo-8-pro',
        brand: 'Chery',
        model: 'Tiggo 8 Pro',
        variant: '1.6 TGDI Excellent',
        years: '2023-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-167891234567-abcdef123456?auto=format&fit=crop&q=80',
        price: 1950000,
        reliabilityScore: 75,
        totalIssues: 3,
        searchCount: 60000,
        issues: [
            { id: 'chery-1', title: 'Yakıt Tüketimi', description: 'Şehir içi 11-13 litre arası yakıt tüketimi.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: 'Sürekli', repairCost: 'Yakıt Maliyeti' },
            { id: 'chery-2', title: 'Ekran Donması', description: 'Multimedya sisteminin kilitlenmesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' },
            { id: 'chery-3', title: 'Boya Kalitesi', description: 'Taş izlerine karşı hassas kaput boyası.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Zamanla', repairCost: 'PPF Kaplama Şart' }
        ],
        pros: ['Fiyat/Donanım', 'Heybetli görünüm', '7 Kişilik'],
        cons: ['Çok yakıyor', 'Servis ağı yeni', 'Süspansiyon yumuşak (Salınım)'],
        buyingTips: ['Yakıtı dert etmiyorsanız bu fiyata alabileceğiniz en lüks gemidir. PPF kaplatın.']
    },
    {
        id: 'jeep-renegade-mjet',
        slug: 'jeep-renegade-1-6-multijet',
        brand: 'Jeep',
        model: 'Renegade',
        variant: '1.6 MultiJet Longitude',
        years: '2015-2022',
        generation: 'BU',
        image: 'https://images.unsplash.com/photo-1590051974609-b6b55c3285c5?auto=format&fit=crop&q=80',
        price: 1350000,
        reliabilityScore: 78,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            { id: 'renegade-1', title: 'Turbo Valfi', description: 'Turbo basınç valfi (N75) arızası ve güç kaybı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '3.000 - 5.000 TL' },
            { id: 'renegade-2', title: 'Start-Stop', description: 'Sistemin çalışmaması (Fiat grubu kroniği).', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Sensör' }
        ],
        pros: ['İkonik tasarım', 'Sağlam şasi', 'Görüş açısı'],
        cons: ['Bagaj çok küçük', 'Rüzgar sesi (Kutu tasarım)', 'Yakıt'],
        buyingTips: ['Arazide kullanılmış mı diye altına baktırın, şehir cipi olsa da zorlayanlar var.']
    },
    {
        id: 'suzuki-vitara-boosterjet',
        slug: 'suzuki-vitara-1-4-boosterjet',
        brand: 'Suzuki',
        model: 'Vitara',
        variant: '1.4 BoosterJet AllGrip',
        years: '2016-2024',
        generation: 'LY',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1400000,
        reliabilityScore: 94,
        totalIssues: 0,
        searchCount: 12000,
        issues: [],
        pros: ['Gerçek 4x4 (AllGrip)', 'Sorunsuz Japon', 'Yakıt/Performans'],
        cons: ['İç mekan kalitesi düşük (Trim)', 'Kapılar hafif', 'Yalıtım'],
        buyingTips: ['Sorunsuzluk ve 4 çeker istiyorsanız rakipsizdir. Konfor beklemeyin.']
    },
    // BATCH 3: PREMIUM SEGMENT (ADDED FEB 2026)
    {
        id: 'mercedes-c200d-w205',
        slug: 'mercedes-c200d-w205',
        brand: 'Mercedes-Benz',
        model: 'C-Serisi',
        variant: 'C200d AMG',
        years: '2014-2021',
        generation: 'W205',
        image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80',
        price: 2400000,
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 42000,
        issues: [
            { id: 'c200d-1', title: 'NOx Sensörü', description: 'Egzoz emisyon sistemi sensör arızası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '15.000 - 25.000 TL' },
            { id: 'c200d-2', title: 'Artico Deri Çatlaması', description: 'Sürücü koltuğu kenarındaki suni derinin çatlaması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: 'Döşeme Tamiri' }
        ],
        pros: ['Prestij', 'Konfor', 'İkinci el hızı'],
        cons: ['Rüzgar sesi (Fitil)', 'Arka diz mesafesi dar'],
        buyingTips: ['İmzalı seri (Dikişli göğüs) olup olmadığını kontrol edin, imzalılar daha değerlidir.']
    },
    {
        id: 'bmw-320i-f30',
        slug: 'bmw-320i-f30-ed',
        brand: 'BMW',
        model: '3 Serisi',
        variant: '320i ED 40. Yıl',
        years: '2012-2019',
        generation: 'F30',
        image: 'https://images.unsplash.com/photo-1555215695-3004980adade?auto=format&fit=crop&q=80',
        price: 2200000,
        reliabilityScore: 82,
        totalIssues: 3,
        searchCount: 48000,
        issues: [
            { id: 'f30-1', title: 'Su Eksiltme', description: 'Genleşme tankı veya hortumlardan soğutma sıvısı kaçırma.', category: 'motor', riskLevel: 'HIGH', affectedKm: '80.000+ km', repairCost: '5.000 - 15.000 TL' },
            { id: 'f30-2', title: 'Tahrik Uyarısı', description: 'Bobin/Buji veya Turbo valfi kaynaklı güç kısıtlama.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: '10.000 - 30.000 TL' },
            { id: 'f30-3', title: 'Kapı Kolu Erimi', description: 'İç kapı kollarının yapış yapış olması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: '2.000 TL' }
        ],
        pros: ['Arkadan itiş (Drift)', 'ZF Şanzıman', 'Performans (Yazılıma açık)'],
        cons: ['Çok yakıyor (10L+)', 'Hor kullanılmış araç çok'],
        buyingTips: ['Harman Kardon ve NBT ekran olup olmadığına bakın, bunlar aracın değerini çok etkiler.']
    },
    {
        id: 'audi-a3-8v-sedan',
        slug: 'audi-a3-sedan-8v-tfsi',
        brand: 'Audi',
        model: 'A3',
        variant: 'Sedan 35 TFSI',
        years: '2013-2020',
        generation: '8V',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80',
        price: 1900000,
        reliabilityScore: 89,
        totalIssues: 2,
        searchCount: 28000,
        issues: [
            { id: 'a3-1', title: 'DSG Mekatronik', description: 'S-Tronic şanzıman beyni arızası.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '90.000+ km', repairCost: '30.000 TL' }
        ],
        pros: ['Tasarım', 'Kalite', 'Sessizlik'],
        cons: ['Donanım fakiri (Bazı paketler)', 'Arkası dar'],
        buyingTips: ['Matrix LED farlı modelleri tercih edin, gece sürüşü muazzamdır.']
    },
    {
        id: 'volvo-xc40-t3',
        slug: 'volvo-xc40-t3',
        brand: 'Volvo',
        model: 'XC40',
        variant: 'T3 R-Design',
        years: '2018-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1620884102986-a97918a56d81?auto=format&fit=crop&q=80',
        price: 2500000,
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 21000,
        issues: [
            { id: 'xc40-1', title: 'Yazılım Hataları', description: 'Ekranın donması veya güvenlik sistemlerinin gereksiz uyarısı.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Güncelleme' }
        ],
        pros: ['Güvenlik', 'Saklama alanları', 'Tasarım'],
        cons: ['Yakıt tüketimi (T3 motor)', 'Bagaj küçük'],
        buyingTips: ['T3 motor biraz fazla yakar (9-10L), bunu bilerek alın.']
    },
    {
        id: 'mercedes-a180d-sedan',
        slug: 'mercedes-a180d-sedan-v177',
        brand: 'Mercedes-Benz',
        model: 'A-Serisi',
        variant: 'A180d Sedan AMG',
        years: '2019-2024',
        generation: 'V177',
        image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
        price: 2300000,
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 25000,
        issues: [
            { id: 'a180-1', title: 'MBUX Sesli Komut', description: 'Hey Mercedes sisteminin gereksiz devreye girmesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: '-', repairCost: '-' }
        ],
        pros: ['İç ambiyans', 'Dev ekranlar', 'Yakıt'],
        cons: ['Arka süspansiyon sert', 'Yere çok yakın (Altını vurabilir)'],
        buyingTips: ['Teknoloji paketi (Büyük ekran) olmazsa olmazdır.']
    },
    {
        id: 'bmw-520i-g30',
        slug: 'bmw-520i-g30-m-sport',
        brand: 'BMW',
        model: '5 Serisi',
        variant: '520i G30 M Sport',
        years: '2017-2023',
        generation: 'G30',
        image: 'https://images.unsplash.com/photo-1556189250-72ba9545225d?auto=format&fit=crop&q=80',
        price: 3500000,
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 35000,
        issues: [
            { id: 'g30-1', title: 'Klima Ekranı', description: 'Klima panelinde çatlama (Kronik).', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '15.000 TL' }
        ],
        pros: ['Yalıtım', 'Konfor', 'Prestij'],
        cons: ['Büyük boyutlar (Park sorunu)', 'Lastik maliyeti'],
        buyingTips: ['Vakum kapı ve hayalet ekran opsiyonlarını arayın.']
    },
    {
        id: 'audi-a4-b9',
        slug: 'audi-a4-b9-tdi',
        brand: 'Audi',
        model: 'A4',
        variant: 'B9 40 TDI Quattro',
        years: '2016-2024',
        generation: 'B9',
        image: 'https://images.unsplash.com/photo-1603584173870-7b23139f9131?auto=format&fit=crop&q=80',
        price: 2800000,
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 18000,
        issues: [
            { id: 'a4-1', title: 'AdBlue', description: 'AdBlue sistem hatası (TDI motorlarda).', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '20.000 TL' }
        ],
        pros: ['Quattro (4 çeker)', 'Malzeme kalitesi', 'Sessizlik'],
        cons: ['Tasarım muhafazakar', 'Bakım pahalı'],
        buyingTips: ['Quattro olmayan önden çekişli modeller daha ekonomiktir ama Quattro keyfi başkadır.']
    },
    {
        id: 'volvo-s60-new',
        slug: 'volvo-s60-b5',
        brand: 'Volvo',
        model: 'S60',
        variant: 'B5 AWD Inscription',
        years: '2019-2024',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80',
        price: 3200000,
        reliabilityScore: 93,
        totalIssues: 0,
        searchCount: 12000,
        issues: [],
        pros: ['Güvenlik', 'Tasarım', 'Ses sistemi (B&W)'],
        cons: ['180 km/s hız limiti', 'Yakıt'],
        buyingTips: ['Bowers & Wilkins ses sistemi opsiyonu varsa kaçırmayın, dünyadaki en iyi araç ses sistemidir.']
    },
    {
        id: 'range-rover-evoque',
        slug: 'range-rover-evoque-td4',
        brand: 'Land Rover',
        model: 'Range Rover Evoque',
        variant: '2.0 TD4',
        years: '2012-2018',
        generation: 'L538',
        image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80',
        price: 1800000,
        reliabilityScore: 65,
        totalIssues: 3,
        searchCount: 22000,
        issues: [
            { id: 'evoque-1', title: 'Şanzıman (9 İleri)', description: '9 ileri ZF şanzımanın kararsızlığı ve vuruntu.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '50.000+ TL' },
            { id: 'evoque-2', title: 'Turbo', description: 'Turbo arızası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '30.000 TL' },
            { id: 'evoque-3', title: 'Elektronik', description: 'Sürekli yanan arıza lambaları.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Bulunamıyor' }
        ],
        pros: ['Tasarım', 'Marka imajı', 'Havası'],
        cons: ['Çok sorunlu', 'Çok yakıyor', 'Bakım çok pahalı'],
        buyingTips: ['Sırf görüntüsü için alıyorsanız, kenarda 100.000 TL arıza parası ayırın.']
    },
    {
        id: 'mercedes-cla',
        slug: 'mercedes-cla-180d',
        brand: 'Mercedes-Benz',
        model: 'CLA',
        variant: 'CLA 180d AMG',
        years: '2014-2019',
        generation: 'C117',
        image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?auto=format&fit=crop&q=80',
        price: 1750000,
        reliabilityScore: 84,
        totalIssues: 1,
        searchCount: 26000,
        issues: [
            { id: 'cla-1', title: 'Trim Sesleri', description: 'Sert süspansiyon nedeniyle iç mekandan gelen sesler.', category: 'govde', riskLevel: 'LOW', affectedKm: '40.000+ km', repairCost: '-' }
        ],
        pros: ['Çerçevesiz camlar', 'Coupe form', 'Dikkat çekici'],
        cons: ['Çok sert', 'Arka baş mesafesi yok', 'Görüş açısı dar'],
        buyingTips: ['Cam tavanın perdesini kontrol edin, sarkma yapabilir.']
    },
    // BATCH 4: COMMERCIALS & OTHERS (ADDED FEB 2026)
    {
        id: 'fiat-doblo-d3',
        slug: 'fiat-doblo-1-3-multijet',
        brand: 'Fiat',
        model: 'Doblo',
        variant: '1.3 MultiJet Premio',
        years: '2010-2022',
        generation: 'D3',
        image: 'https://images.unsplash.com/photo-1632823471565-1ec85e239f1c?auto=format&fit=crop&q=80',
        price: 850000,
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 55000,
        issues: [
            { id: 'doblo-1', title: 'DPF Tıkanıklığı', description: 'Şehir içi kullanımda partikül filtresi dolması.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '5.000 - 10.000 TL' },
            { id: 'doblo-2', title: 'Amortisör Takozu', description: 'Ön takımdan gelen sesler.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '40.000+ km', repairCost: '2.000 - 4.000 TL' }
        ],
        pros: ['Genişlik', 'Piyasa', 'Yedek parça'],
        cons: ['Yalıtım', 'Performans (1.3 motor yüklüyken)'],
        buyingTips: ['Yük görmemiş "Hususi" kullanılmış araç bulursanız kaçırmayın.']
    },
    {
        id: 'ford-tourneo-courier',
        slug: 'ford-tourneo-courier-1-5-tdci',
        brand: 'Ford',
        model: 'Tourneo Courier',
        variant: '1.5 TDCi Titanium Plus',
        years: '2014-2023',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1605515298946-d062f2e9da53?auto=format&fit=crop&q=80',
        price: 950000,
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 60000,
        issues: [
            { id: 'courier-1', title: 'AdBlue Isıtıcısı', description: 'AdBlue deposu ısıtıcı arızası (Kışın).', category: 'motor', riskLevel: 'MEDIUM', affectedKm: 'Rastgele', repairCost: '10.000 TL' }
        ],
        pros: ['Otomobil hissi', 'Yol tutuş', 'Tasarım'],
        cons: ['Arka koltuk diz mesafesi', 'Bagaj (Doblo\'ya göre küçük)'],
        buyingTips: ['Titanium Plus - Koltuk ısıtmalı olanlar en çok tutulanlardır.']
    },
    {
        id: 'vw-caddy-4',
        slug: 'volkswagen-caddy-2-0-tdi',
        brand: 'Volkswagen',
        model: 'Caddy',
        variant: '2.0 TDI Comfortline',
        years: '2015-2020',
        generation: 'Mk4',
        image: 'https://images.unsplash.com/photo-1605218427306-633ba87c9408?auto=format&fit=crop&q=80',
        price: 1300000,
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 38000,
        issues: [
            { id: 'caddy-1', title: 'Enjektör', description: 'Kötü yakıta bağlı enjektör arızası.', category: 'motor', riskLevel: 'HIGH', affectedKm: '150.000+ km', repairCost: '30.000 - 50.000 TL' }
        ],
        pros: ['Kalite', 'Güçlü motor (2.0 TDI)', 'DSG konforu'],
        cons: ['Arka makas sistemi (Zıplatma)', 'Fiyat'],
        buyingTips: ['DSG şanzımanlı alıyorsanız kavrama testini mutlaka yapın.']
    },
    {
        id: 'fiat-fiorino-premio',
        slug: 'fiat-fiorino-1-3-multijet',
        brand: 'Fiat',
        model: 'Fiorino',
        variant: '1.3 MultiJet Premio',
        years: '2008-2024',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80',
        price: 750000,
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 45000,
        issues: [
            { id: 'fiorino-1', title: 'Amortisör Kulesi', description: 'Ön süspansiyon takozlarından ses gelmesi.', category: 'suspansiyon', riskLevel: 'LOW', affectedKm: '30.000+ km', repairCost: '2.000 TL' }
        ],
        pros: ['Şehir içi pratiklik', 'Yakıt cimrisi', 'İkinci el'],
        cons: ['Konfor yok', 'Performans zayıf', 'Yalıtım'],
        buyingTips: ['LPG\'li 1.4 versiyonu çok yakar, 1.3 Dizel tercih edin.']
    },
    {
        id: 'peugeot-rifter-gt',
        slug: 'peugeot-rifter-1-5-bluehdi',
        brand: 'Peugeot',
        model: 'Rifter',
        variant: '1.5 BlueHDi GT',
        years: '2019-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1626830588632-4740d9976378?auto=format&fit=crop&q=80',
        price: 1450000,
        reliabilityScore: 85,
        totalIssues: 1,
        searchCount: 20000,
        issues: [
            { id: 'rifter-1', title: 'AdBlue', description: 'Grup geneli AdBlue depo sorunu.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '30.000 TL' }
        ],
        pros: ['SUV görünümü', 'i-Cockpit', '8 ileri otomatik'],
        cons: ['AdBlue riski', 'Rüzgar sesi'],
        buyingTips: ['Cam tavanlı GT paket bir SUV kadar konforludur.']
    },
    {
        id: 'citroen-berlingo-shine',
        slug: 'citroen-berlingo-1-5-bluehdi',
        brand: 'Citroen',
        model: 'Berlingo',
        variant: '1.5 BlueHDi Shine Bold',
        years: '2019-2024',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1626830588632-4740d9976378?auto=format&fit=crop&q=80',
        price: 1400000,
        reliabilityScore: 85,
        totalIssues: 1,
        searchCount: 18000,
        issues: [
            { id: 'berlingo-1', title: 'AdBlue', description: 'AdBlue sistemi arızası.', category: 'motor', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '30.000 TL' }
        ],
        pros: ['Modutop tavan (Saklama alanı)', 'Konfor', 'Genişlik'],
        cons: ['Elektronik el freni bazen takılı kalabilir', 'AdBlue'],
        buyingTips: ['Modutop tavanlı versiyonları çocuklu aileler için birebirdir.']
    },
    {
        id: 'toyota-proace-city',
        slug: 'toyota-proace-city-1-5-d',
        brand: 'Toyota',
        model: 'Proace City',
        variant: '1.5 D Dream',
        years: '2020-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1621510459385-05d52723d772?auto=format&fit=crop&q=80',
        price: 1500000,
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 12000,
        issues: [
            { id: 'proace-1', title: 'AdBlue', description: 'PSA grubu üretimi olduğu için aynı kronik sorun bunda da var.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '30.000 TL' }
        ],
        pros: ['5 Yıl Garanti', 'Toyota servis kalitesi', 'Donanım'],
        cons: ['PSA altyapısı (Toyota motoru değil)', 'Fiyat'],
        buyingTips: ['Toyota garantisi için tercih edilebilir, mekanik olarak Rifter ile aynıdır.']
    },
    {
        id: 'ford-ranger-wildtrak',
        slug: 'ford-ranger-2-0-ecoblue',
        brand: 'Ford',
        model: 'Ranger',
        variant: '2.0 EcoBlue Wildtrak',
        years: '2015-2023',
        generation: 'T6',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
        price: 2200000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 30000,
        issues: [
            { id: 'ranger-1', title: 'Şanzıman (10 İleri)', description: 'Vites geçişlerinde vuruntu (Yazılım ile düzelir).', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' },
            { id: 'ranger-2', title: 'Enjektör', description: 'Yakıt seçiciliği.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '20.000 TL' }
        ],
        pros: ['Arazi yeteneği', 'Heybetli görünüm', 'Konfor (Pick-up\'a göre)'],
        cons: ['Şehir içi park', 'Yakıt (10-12L)', 'MTV yüksek'],
        buyingTips: ['Off-road donanımı sonradan takılan araçların şasi kontrollerini iyi yapın.']
    },
    {
        id: 'renault-kangoo-3',
        slug: 'renault-kangoo-1-5-dci',
        brand: 'Renault',
        model: 'Kangoo',
        variant: '1.5 Blue dCi',
        years: '2021-2024',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1621510459385-05d52723d772?auto=format&fit=crop&q=80',
        price: 1100000,
        reliabilityScore: 87,
        totalIssues: 1,
        searchCount: 15000,
        issues: [
            { id: 'kangoo-1', title: 'Partikül Filtresi', description: 'Kurum birikimi.', category: 'motor', riskLevel: 'LOW', affectedKm: 'Şehir içi', repairCost: 'Temizlik' }
        ],
        pros: ['Sessiz motor', 'Yeni nesil güvenlik', 'Görüş açısı'],
        cons: ['Fiyat (Rakiplerinden pahalı)', 'Kapı direği yok (Güvenlik?)'],
        buyingTips: ['Opsiyonel B sütunu olmayan model çok havalıdır ama kaza güvenliği sorgulanmalıdır.']
    },
    {
        id: 'tofas-sahin-ie',
        slug: 'tofas-sahin-1-6-ie',
        brand: 'Fiat',
        model: 'Şahin',
        variant: '1.6 ie',
        years: '1998-2002',
        generation: 'Kuş Serisi',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80',
        price: 350000,
        reliabilityScore: 60,
        totalIssues: 5,
        searchCount: 100000,
        issues: [
            { id: 'sahin-1', title: 'Hararet', description: 'Conta yakma (Efsane kronik).', category: 'motor', riskLevel: 'HIGH', affectedKm: 'Her an', repairCost: '5.000 TL' },
            { id: 'sahin-2', title: 'Diferansiyel', description: 'Diferansiyel ötmesi.', category: 'sanziman', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: '3.000 TL' },
            { id: 'sahin-3', title: 'Çürük', description: 'Alt taban ve çamurluk ağızlarında çürüme.', category: 'govde', riskLevel: 'HIGH', affectedKm: 'Yaşa bağlı', repairCost: '15.000 - 30.000 TL' }
        ],
        pros: ['Parça bakkalda bile var', 'Tamiri kolay', 'Arkadan itiş keyfi'],
        cons: ['Güvenlik (0 Yıldız)', 'Konfor yok', 'Yalıtım yok'],
        buyingTips: ['Çürük çarık olmayan, şasisi düzgün bir tane bulmak imkansıza yakındır.']
    },
    {
        id: 'togg-t10x-v2',
        slug: 'togg-t10x-v2-long-range',
        brand: 'Togg',
        model: 'T10X',
        variant: 'V2 Long Range',
        years: '2023-2024',
        generation: 'Mk1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Togg_T10X_front.jpg/2560px-Togg_T10X_front.jpg',
        price: 1850000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 150000,
        issues: [
            { id: 'togg-1', title: 'Yazılım Güncellemesi', description: 'Ekran donmaları ve şarj istasyonu eşleşme sorunları (OTA ile çözülüyor).', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'İlk seriler', repairCost: 'Ücretsiz' },
            { id: 'togg-2', title: 'Trim Sesleri', description: 'B sütunu ve kapı içlerinden gelen hafif trim sesleri.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Servis Ayarı' }
        ],
        pros: ['Yerli üretim avantajı', 'Performans (218 HP)', 'Geniş iç hacim'],
        cons: ['Menzil kışın düşüyor', 'Servis ağı henüz yaygınlaşıyor'],
        buyingTips: ['V2 Long Range en mantıklı seçenektir, menzil farkı çok belirgindir.']
    },
    {
        id: 'range-rover-evoque',
        slug: 'range-rover-evoque-td4',
        brand: 'Land Rover',
        model: 'Range Rover Evoque',
        variant: '2.0 TD4',
        years: '2012-2018',
        generation: 'L538',
        image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&q=80',
        price: 1800000,
        reliabilityScore: 65,
        totalIssues: 3,
        searchCount: 22000,
        issues: [
            { id: 'evoque-1', title: 'Şanzıman (9 İleri)', description: '9 ileri ZF şanzımanın kararsızlığı ve vuruntu.', category: 'sanziman', riskLevel: 'HIGH', affectedKm: '60.000+ km', repairCost: '50.000+ TL' },
            { id: 'evoque-2', title: 'Turbo', description: 'Turbo arızası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '30.000 TL' },
            { id: 'evoque-3', title: 'Elektronik', description: 'Sürekli yanan arıza lambaları.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Sürekli', repairCost: 'Bulunamıyor' }
        ],
        pros: ['Tasarım', 'Marka imajı', 'Havası'],
        cons: ['Çok sorunlu', 'Çok yakıyor', 'Bakım çok pahalı'],
        buyingTips: ['Sırf görüntüsü için alıyorsanız, kenarda 100.000 TL arıza parası ayırın.']
    },
    // BATCH 5: POPULAR USED CARS (ADDED FEB 2026)
    {
        id: 'fiat-punto-evo-1-3-multijet',
        slug: 'fiat-punto-evo-1-3-multijet',
        brand: 'Fiat',
        model: 'Punto',
        variant: 'Evo 1.3 MultiJet Dynamic',
        years: '2010-2013',
        generation: 'Evo',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 650000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 28000,
        issues: [
            { id: 'punto-1', title: 'City Modu', description: 'Direksiyon sertleşmesi ve city motoru arızası (Kronik).', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: '60.000+ km', repairCost: '8.000 - 15.000 TL' },
            { id: 'punto-2', title: 'Torpido Çatlaması', description: 'Yolcu hava yastığı kısmından torpidonun çatlaması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Güneş etkisi', repairCost: 'Kozmetik' }
        ],
        pros: ['Yedek parça bedava', 'Yakıt koklar', 'Piyasa'],
        cons: ['Yalıtım', 'Performans (75hp versiyon)', 'City modu riski'],
        buyingTips: ['Torpido çatlağına dikkat edin, tamiri zordur. City modunu açıp kapatarak direksiyonu test edin.']
    },
    {
        id: 'renault-fluence-1-5-dci',
        slug: 'renault-fluence-1-5-dci',
        brand: 'Renault',
        model: 'Fluence',
        variant: '1.5 dCi Touch Plus',
        years: '2010-2016',
        generation: 'L38',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 850000,
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 42000,
        issues: [
            { id: 'fluence-1', title: 'EDC Beyni', description: 'Otomatik viteslerde şanzıman beyni arızası.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '20.000 - 35.000 TL' }
        ],
        pros: ['Makam aracı konforu', 'Geniş arka diz mesafesi', 'Az yakar'],
        cons: ['İmaj (Şirket/Kiralama)', 'Yol tutuş (Yumuşak)', 'Direksiyon hissiz'],
        buyingTips: ['Makam perdesi olan Touch Plus veya Icon paketleri tercih edin. Şirket çıkması olmayan temizini bulmak zordur.']
    },
    {
        id: 'renault-talisman-1-6-dci',
        slug: 'renault-talisman-1-6-dci',
        brand: 'Renault',
        model: 'Talisman',
        variant: '1.6 dCi Icon',
        years: '2016-2020',
        generation: 'L2M',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1450000,
        reliabilityScore: 80,
        totalIssues: 2,
        searchCount: 15000,
        issues: [
            { id: 'talisman-1', title: '4Control Sistemi', description: 'Arka tekerlek yönlendirme sisteminde ses ve boşluk.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '30.000 TL' },
            { id: 'talisman-2', title: 'R-Link Ekran', description: 'Ekranın kararması veya dokunmatik kaybı.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '10.000 TL' }
        ],
        pros: ['Tasarım harikası', 'Masajlı koltuklar', '4Control yol tutuş'],
        cons: ['İkinci eli yavaş', 'Parçası pahalı (Kaporta)', 'Rüzgar sesi'],
        buyingTips: ['4Control sistemi olanları alırken mutlaka yetkili serviste ekspertiz yaptırın.']
    },
    {
        id: 'volkswagen-jetta-mk6',
        slug: 'volkswagen-jetta-1-4-tsi',
        brand: 'Volkswagen',
        model: 'Jetta',
        variant: '1.4 TSI Highline',
        years: '2011-2018',
        generation: 'Mk6',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1150000,
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 35000,
        issues: [
            { id: 'jetta-1', title: 'DSG Kavrama', description: 'Titreme ve vuruntu (Klasik DSG sorunu).', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '70.000+ km', repairCost: '25.000 TL' },
            { id: 'jetta-2', title: 'Kapı Döşemesi', description: 'Kumaş döşemelerin sarkması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Yaşa bağlı', repairCost: '2.000 TL' }
        ],
        pros: ['Bagaj hacmi', 'Piyasa', 'Tok sürüş'],
        cons: ['Meksika üretimi (Malzeme kalitesi Golf\'ten düşük)', 'Yalıtım'],
        buyingTips: ['Meksika üretimi olduğu için Golf kalitesi beklemeyin ama bagajı için alınır.']
    },
    {
        id: 'volkswagen-passat-cc',
        slug: 'volkswagen-arteon-1-5-tsi',
        brand: 'Volkswagen',
        model: 'Arteon',
        variant: '1.5 TSI R-Line',
        years: '2017-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 2400000,
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 18000,
        issues: [
            { id: 'arteon-1', title: 'Sunroof Çıtırdaması', description: 'Kasa esnemesi kaynaklı tavan sesi.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: 'Bakım' }
        ],
        pros: ['Tasarım', 'Bagaj (Liftback)', 'Prestij'],
        cons: ['Arka baş mesafesi', 'Uzunluk (Park)'],
        buyingTips: ['R-Line paket tercih edin, satarken çok daha hızlı gider.']
    },
    {
        id: 'ford-mondeo-mk5',
        slug: 'ford-mondeo-1-5-ecoboost',
        brand: 'Ford',
        model: 'Mondeo',
        variant: '1.5 EcoBoost Titanium',
        years: '2014-2022',
        generation: 'Mk5',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1350000,
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 14000,
        issues: [
            { id: 'mondeo-1', title: 'Şanzıman Vuruntusu', description: '6F35 şanzımanın 2-3 geçişlerinde sarsıntı.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: 'Elektrovalf/Yağ' },
            { id: 'mondeo-2', title: 'Direksiyon Kutusu', description: 'Elektrikli direksiyon arızası (Nadir).', category: 'elektronik', riskLevel: 'MEDIUM', affectedKm: '150.000+ km', repairCost: '25.000 TL' }
        ],
        pros: ['Aston Martin ön panjur', 'Sessizlik (Sınıf lideri)', 'Yol tutuş'],
        cons: ['Yakıt tüketimi (11-12LT)', 'Ağır kasa'],
        buyingTips: ['Yakıtı dert etmiyorsanız Passat\'tan daha konforlu ve sessiz bir araçtır.']
    },
    {
        id: 'honda-civic-fb7',
        slug: 'honda-civic-fb7-1-6-eco',
        brand: 'Honda',
        model: 'Civic',
        variant: 'FB7 1.6 Eco Elegance',
        years: '2012-2016',
        generation: 'FB7',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 950000,
        reliabilityScore: 94,
        totalIssues: 1,
        searchCount: 48000,
        issues: [
            { id: 'fb7-1', title: 'Boya Kalitesi', description: 'Vernik atması ve ince boya.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Zamanla', repairCost: 'Kozmetik' }
        ],
        pros: ['Ölümsüz motor/şanzıman', 'LPG ile bedava geziyor', 'İkinci el peynir ekmek'],
        cons: ['Yalıtım sıfır', 'Performans düşük'],
        buyingTips: ['LPG dolum ağzı benzin kapağında olan (Fabrikasyon) modelleri tercih edin.']
    },
    {
        id: 'toyota-auris-valvematic',
        slug: 'toyota-auris-1-6-valvematic',
        brand: 'Toyota',
        model: 'Auris',
        variant: '1.6 Advance Skypack',
        years: '2013-2018',
        generation: 'E180',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 980000,
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 16000,
        issues: [
            { id: 'auris-1', title: 'Yağ Yakma', description: 'Bazı 1.33 motorlarda yağ eksiltme (1.6 sorunsuz).', category: 'motor', riskLevel: 'LOW', affectedKm: '150.000+ km', repairCost: 'Revizyon' }
        ],
        pros: ['Sorunsuzluk', 'Cam tavan ferahlığı', 'Yumuşak sürüş'],
        cons: ['Multimedya saati 80\'lerden kalma', 'CVT motor bağırır'],
        buyingTips: ['Cam tavanlı (Skypack) olmayanları ikinci elde zor satılır.']
    },
    {
        id: 'hyundai-accent-blue',
        slug: 'hyundai-accent-blue-1-6-crdi',
        brand: 'Hyundai',
        model: 'Accent Blue',
        variant: '1.6 CRDi Mode Plus',
        years: '2011-2018',
        generation: 'RB',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 850000,
        reliabilityScore: 88,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            { id: 'accent-1', title: 'Direksiyon Kutusu', description: 'Tıkırtı sesi.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '10.000 TL' },
            { id: 'accent-2', title: 'Amortisör', description: 'Arka tarafın sekmesi (Yol tutuş zayıf).', category: 'suspansiyon', riskLevel: 'HIGH', affectedKm: 'Yapısal', repairCost: 'Çözümsüz' }
        ],
        pros: ['Roket gibi motor (136hp dizel)', 'Sorunsuz otomatik', 'Parça ucuz'],
        cons: ['Yol tutuş çok kötü (Arka savurur)', 'Frenler zayıf'],
        buyingTips: ['Hız yapmayı seviyorsanız uzak durun, arka tarafı çok oynar. Şehir içi ve performans için harikadır.']
    },
    {
        id: 'ford-ranger-wildtrak',
        slug: 'ford-ranger-wildtrak',
        brand: 'Ford',
        model: 'Ranger',
        variant: '2.0 EcoBlue Wildtrak',
        years: '2019-2023',
        generation: 'T6',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 2100000,
        reliabilityScore: 85,
        totalIssues: 2,
        searchCount: 30000,
        issues: [
            { id: 'ranger-1', title: 'Şanzıman (10 İleri)', description: 'Vites geçişlerinde kararsızlık ve ısınma.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: 'Ağır kullanım', repairCost: '40.000 TL' },
            { id: 'ranger-2', title: 'AdBlue Enjektörü', description: 'Tıkanma.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '50.000+ km', repairCost: '8.000 TL' }
        ],
        pros: ['Heybet', 'Vergi avantajı (Kamyonet)', 'Arazi yeteneği'],
        cons: ['Şehir içi park', 'Yıllık muayene', 'Hız sınırı'],
        buyingTips: ['Sürgü kapaklı bagaj ve dodik setli olanlar daha değerlidir.']
    },
    {
        id: 'vw-transporter-t6',
        slug: 'volkswagen-transporter-t6',
        brand: 'Volkswagen',
        model: 'Transporter',
        variant: 'T6 City Van',
        years: '2015-2024',
        generation: 'T6',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1600000,
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 25000,
        issues: [
            { id: 'transporter-1', title: 'EGR Valfi', description: 'Tıkanma ve güç kaybı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '15.000 TL' }
        ],
        pros: ['VIP konforu', 'Piyasa (Altın)', 'Güçlü motor'],
        cons: ['Yakıt', 'Bakım maliyeti'],
        buyingTips: ['VIP yapılı araç alıyorsanız ruhsata işli olup olmadığına (9+1) mutlaka bakın.']
    },
    // BATCH 6: USER REQUESTED MISSING MODELS & ENGINES (ADDED FEB 2026)
    {
        id: 'volkswagen-amarok-v6-tdi',
        slug: 'volkswagen-amarok-v6-tdi',
        brand: 'Volkswagen',
        model: 'Amarok',
        variant: '3.0 V6 TDI Aventura',
        years: '2016-2022',
        generation: 'Mk1 Facelift',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 2600000,
        reliabilityScore: 84,
        totalIssues: 2,
        searchCount: 22000,
        issues: [
            { id: 'amarok-1', title: 'Direksiyon Pompası', description: 'Ağır arazide pompanın ses yapması.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '15.000 TL' },
            { id: 'amarok-2', title: 'DPF Tıkanıklığı', description: 'Şehir içi kullanımda DPF uyarısı.', category: 'motor', riskLevel: 'LOW', affectedKm: 'Şehir içi', repairCost: 'Rejenerasyon' }
        ],
        pros: ['V6 motor gücü', 'Konfor (Kamyonet değil SUV gibi)', 'Prestij'],
        cons: ['Yakıt tüketimi (12-13L)', 'Park sorunu (Genişlik)'],
        buyingTips: ['2.0 TDI dört silindirli yerine mutlaka V6 TDI alın, yakıtı aynı performansı çok farklıdır.']
    },
    {
        id: 'bmw-x5-xdrive30d',
        slug: 'bmw-x5-xdrive30d',
        brand: 'BMW',
        model: 'X5',
        variant: 'xDrive30d M Sport',
        years: '2018-2024',
        generation: 'G05',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 6500000,
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 28000,
        issues: [
            { id: 'x5-1', title: 'Hava Süspansiyonu', description: 'Körüklerin zamanla inmesi.', category: 'suspansiyon', riskLevel: 'MEDIUM', affectedKm: '120.000+ km', repairCost: '40.000 TL' }
        ],
        pros: ['Sürüş keyfi', 'Kalite', 'Teknoloji'],
        cons: ['Lastik maliyeti', 'Bakım ücretleri'],
        buyingTips: ['Lazer far opsiyonu gece sürüşü için devrim niteliğindedir.']
    },
    {
        id: 'bmw-x3-xdrive20i',
        slug: 'bmw-x3-xdrive20i',
        brand: 'BMW',
        model: 'X3',
        variant: 'xDrive20i M Sport',
        years: '2017-2024',
        generation: 'G01',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 3800000,
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 20000,
        issues: [
            { id: 'x3-1', title: 'Soğutma Sıvısı', description: 'Eksik soğutma sıvısı uyarısı (Hortum kaçağı).', category: 'motor', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '2.000 TL' }
        ],
        pros: ['İdeal boyut', '4 çeker başarısı', 'İkinci el'],
        cons: ['Benzinli motor çok yakar (11L)', 'Rüzgar sesi'],
        buyingTips: ['M Sport süspansiyon serttir, konfor için xLine tercih edilebilir.']
    },
    {
        id: 'bmw-g30-520i',
        slug: 'bmw-g30-520i',
        brand: 'BMW',
        model: '5 Serisi',
        variant: '520i Special Edition M Sport',
        years: '2017-2023',
        generation: 'G30',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 3500000,
        reliabilityScore: 92,
        totalIssues: 1,
        searchCount: 45000,
        issues: [
            { id: 'g30-1', title: 'Aktif Panjur', description: 'Ön panjur kanatçıklarının takılı kalması.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: '5.000 TL' }
        ],
        pros: ['Yalıtım', 'Prestij', 'Teknoloji'],
        cons: ['Park sorunu', 'Yakıt'],
        buyingTips: ['Borusan çıkışlı ve "Special Edition" (Vakum/Hayalet/Harman) olmasına dikkat edin.']
    },
    {
        id: 'audi-q5-40-tdi',
        slug: 'audi-q5-40-tdi',
        brand: 'Audi',
        model: 'Q5',
        variant: '40 TDI Quattro S-Line',
        years: '2017-2024',
        generation: 'FY',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 3500000,
        reliabilityScore: 90,
        totalIssues: 1,
        searchCount: 19000,
        issues: [
            { id: 'q5-1', title: 'AdBlue', description: 'AdBlue dozajlama hatası.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '15.000 TL' }
        ],
        pros: ['Quattro güveni', 'Sessizlik', 'İç mekan kalitesi'],
        cons: ['Tasarım eski yüzlü', 'Servis pahalı'],
        buyingTips: ['Matrix LED far olmayanları ikinci elde daha yavaş satılır.']
    },
    {
        id: 'audi-a6-c8-40-tdi',
        slug: 'audi-a6-c8-40-tdi',
        brand: 'Audi',
        model: 'A6',
        variant: '40 TDI Quattro S-Line',
        years: '2018-2024',
        generation: 'C8',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 4200000,
        reliabilityScore: 91,
        totalIssues: 1,
        searchCount: 22000,
        issues: [
            { id: 'a6-1', title: 'MMI Ekranlar', description: 'Alt dokunmatik ekranın tepki vermemesi.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Rastgele', repairCost: 'Yazılım' }
        ],
        pros: ['Teknoloji üssü', 'Konfor', 'Prestij'],
        cons: ['Çok fazla parmak izi (Ekranlar)', 'Yazılım hataları'],
        buyingTips: ['Direksiyon ısıtma ve vakum kapı opsiyonlarını arayın.']
    },
    {
        id: 'audi-a4-b9-40-tfsi',
        slug: 'audi-a4-b9-40-tfsi',
        brand: 'Audi',
        model: 'A4',
        variant: '40 TFSI Advanced',
        years: '2016-2024',
        generation: 'B9',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 2500000,
        reliabilityScore: 89,
        totalIssues: 0,
        searchCount: 16000,
        issues: [],
        pros: ['Sessizlik', 'Yol tutuş', 'Kalite'],
        cons: ['Önden çekiş (Quattro değilse)', 'Arka diz mesafesi'],
        buyingTips: ['Benzinli motorlar (TFSI) dizellere göre çok daha sessiz ve sorunsuzdur.']
    },
    {
        id: 'seat-arona-1-0-tsi',
        slug: 'seat-arona-1-0-tsi',
        brand: 'Seat',
        model: 'Arona',
        variant: '1.0 TSI Xperience',
        years: '2018-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1350000,
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 18000,
        issues: [
            { id: 'arona-1', title: 'Kapı Sesi', description: 'Kapı fitillerinden gelen rüzgar sesi.', category: 'govde', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: 'Fitil Ayarı' }
        ],
        pros: ['Şehir içi pratiklik', 'Donanım', 'Tasarım'],
        cons: ['Sert süspansiyon', 'Dar iç mekan'],
        buyingTips: ['Çift renk tavanlı modelleri tercih edin, karakter katıyor.']
    },
    {
        id: 'seat-leon-1-5-tsi',
        slug: 'seat-leon-1-5-tsi',
        brand: 'Seat',
        model: 'Leon',
        variant: '1.5 TSI FR',
        years: '2020-2024',
        generation: 'Mk4',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1550000,
        reliabilityScore: 86,
        totalIssues: 2,
        searchCount: 38000,
        issues: [
            { id: 'leon-1', title: 'Multimedya', description: 'Ekranın geç açılması veya donması.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Yazılımsal', repairCost: 'Güncelleme' },
            { id: 'leon-2', title: 'SOS Hatası', description: 'Acil durum çağrı sistemi hatası.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Yazılımsal', repairCost: 'Servis' }
        ],
        pros: ['Tasarım (Işık barı)', 'Yol tutuş', 'Genç imajı'],
        cons: ['Dokunmatik klima kontrolü (Kullanışsız)', 'Malzeme kalitesi (Golf altı)'],
        buyingTips: ['FR paket kırmızı renk Leon\'un olmazsa olmazıdır.']
    },
    {
        id: 'cupra-leon-2-0-vz',
        slug: 'cupra-leon-2-0-vz',
        brand: 'Cupra',
        model: 'Leon',
        variant: '2.0 TSI VZ 300hp',
        years: '2020-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 3200000,
        reliabilityScore: 90,
        totalIssues: 0,
        searchCount: 12000,
        issues: [],
        pros: ['Saf performans (300hp)', 'Ses', 'Sürüş zevki'],
        cons: ['Vergi', 'Yakıt', 'Sertlik'],
        buyingTips: ['Gerçek bir hot-hatch arıyorsanız, Type-R ile yarışan tek model budur.']
    },
    {
        id: 'mazda-cx30-2-0-skyactiv',
        slug: 'mazda-cx30-2-0-skyactiv',
        brand: 'Mazda',
        model: 'CX-30',
        variant: '2.0 Skyactiv-G Power Sense',
        years: '2020-2024',
        generation: 'DM',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1900000,
        reliabilityScore: 95,
        totalIssues: 0,
        searchCount: 8000,
        issues: [],
        pros: ['Sorunsuzluk zirvesi', 'Malzeme kalitesi (Premium)', 'Tasarım'],
        cons: ['Arka yaşam alanı dar', 'Bagaj küçük', 'İkinci eli yavaş'],
        buyingTips: ['Sorunsuzluk ve kalite arayıp, ikinci el hızını dert etmeyenler için en iyi seçenek.']
    },
    {
        id: 'suzuki-scross-1-4-hybrid',
        slug: 'suzuki-scross-1-4-hybrid',
        brand: 'Suzuki',
        model: 'S-Cross',
        variant: '1.4 BoosterJet Hybrid GLX',
        years: '2021-2024',
        generation: 'Mk3',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1500000,
        reliabilityScore: 93,
        totalIssues: 0,
        searchCount: 11000,
        issues: [],
        pros: ['Fiyat/Performans', 'Sorunsuzluk', 'Yakıt ekonomisi'],
        cons: ['Tasarım (Subjektif)', 'Yalıtım', 'Malzeme kalitesi'],
        buyingTips: ['AllGrip (4x4) olanları arazide de şaşırtıcı derecede yeteneklidir.']
    },
    {
        id: 'mg-4-electric',
        slug: 'mg-4-electric',
        brand: 'MG',
        model: 'MG4',
        variant: 'Luxury 64kWh',
        years: '2023-2024',
        generation: 'Mk1',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1400000,
        reliabilityScore: 88,
        totalIssues: 1,
        searchCount: 25000,
        issues: [
            { id: 'mg4-1', title: 'Yazılım', description: 'Şarj planlama ve multimedya hataları.', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Yazılımsal', repairCost: 'Güncelleme' }
        ],
        pros: ['Fiyat', 'Sürüş dinamikleri (Arkadan itiş)', 'Menzil'],
        cons: ['İç mekan plastiği', 'Servis ağı (Yeni)'],
        buyingTips: ['Elektrikli araç dünyasına giriş için fiyat/performans kralıdır.']
    },
    {
        id: 'mini-countryman-f60',
        slug: 'mini-countryman-f60',
        brand: 'Mini',
        model: 'Countryman',
        variant: 'Cooper ALL4',
        years: '2017-2024',
        generation: 'F60',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 2100000,
        reliabilityScore: 86,
        totalIssues: 1,
        searchCount: 14000,
        issues: [
            { id: 'countryman-1', title: 'Motor Kulağı', description: 'Motor takozunun erken yıpranması.', category: 'motor', riskLevel: 'LOW', affectedKm: '50.000+ km', repairCost: '8.000 TL' }
        ],
        pros: ['Tarz', 'Genişlik (Mini\'ye göre)', 'Sürüş hissi'],
        cons: ['Sert süspansiyon', 'Yol sesi'],
        buyingTips: ['Aile için tek uygun Mini modelidir. ALL4 (4 çeker) tercih edin.']
    },
    {
        id: 'ds-4-puretech',
        slug: 'ds-4-puretech',
        brand: 'DS',
        model: 'DS4',
        variant: '1.6 PureTech Opera',
        years: '2021-2024',
        generation: 'Mk2',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 2300000,
        reliabilityScore: 85,
        totalIssues: 0,
        searchCount: 10000,
        issues: [],
        pros: ['Sanat eseri tasarım', 'İç mekan kalitesi', 'Konfor'],
        cons: ['İkinci el çok yavaş', 'Fiyat'],
        buyingTips: ['Sıradan olsun istemiyorsanız, yoldaki en şık araç budur.']
    },
    {
        id: 'mitsubishi-asx-1-3-turbo',
        slug: 'mitsubishi-asx-1-3-turbo',
        brand: 'Mitsubishi',
        model: 'ASX',
        variant: '1.3 Turbo Instyle',
        years: '2023-2024',
        generation: 'Mk2',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1450000,
        reliabilityScore: 88,
        totalIssues: 0,
        searchCount: 5000,
        issues: [],
        pros: ['Renault Captur altyapısı', 'Motor performansı', 'Garanti'],
        cons: ['Kopya tasarım (Captur ile aynı)', 'Marka imajı (Eskiye göre)'],
        buyingTips: ['Captur bulamazsanız aynı aracı Mitsubishi logosuyla alabilirsiniz.']
    },
    // VAG ENGINE EXPANSION REQ
    {
        id: 'volkswagen-polo-1-4-tdi',
        slug: 'volkswagen-polo-1-4-tdi',
        brand: 'Volkswagen',
        model: 'Polo',
        variant: '1.4 TDI Comfortline',
        years: '2014-2017',
        generation: '6C',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 850000,
        reliabilityScore: 87,
        totalIssues: 2,
        searchCount: 35000,
        issues: [
            { id: 'polo-tdi-1', title: 'EGR', description: 'EGR valfi tıkanıklığı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '80.000+ km', repairCost: '10.000 TL' },
            { id: 'polo-tdi-2', title: 'Su Devirdaim', description: 'Su pompası sızıntısı.', category: 'motor', riskLevel: 'MEDIUM', affectedKm: '90.000+ km', repairCost: '5.000 TL' }
        ],
        pros: ['Yakıt cimrisi', 'Piyasa', 'Kalite'],
        cons: ['Motor sesi (3 silindir)', 'Arka diz mesafesi'],
        buyingTips: ['Dizel Polo her zaman "çeyrek altın"dır, satarken hiç üzmez.']
    },
    {
        id: 'audi-a3-8v-1-6-tdi',
        slug: 'audi-a3-8v-1-6-tdi',
        brand: 'Audi',
        model: 'A3',
        variant: '1.6 TDI Ambition',
        years: '2012-2017',
        generation: '8V',
        image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80',
        price: 1250000,
        reliabilityScore: 89,
        totalIssues: 1,
        searchCount: 40000,
        issues: [
            { id: 'a3-tdi-1', title: 'DSG Mekatronik', description: 'Şanzıman kartı arızası.', category: 'sanziman', riskLevel: 'MEDIUM', affectedKm: '100.000+ km', repairCost: '30.000 TL' },
            { id: 'a3-tdi-2', title: 'MMI Ekran ', description: 'Ekran mekanizmasının bozulması (Çıkıp girmemesi).', category: 'elektronik', riskLevel: 'LOW', affectedKm: 'Kronik', repairCost: '5.000 TL' }
        ],
        pros: ['Premium his', 'Yakıt', 'İkinci el'],
        cons: ['Donanım (Boş paket çok)', 'Bakım'],
        buyingTips: ['Sunroof olmayan A3\'ler çok zor satılır, mutlaka cam tavanlı bakın.']
    }
];

export const getTrendingCars = (): Car[] => {
    return [...cars].sort((a, b) => (b.searchCount || 0) - (a.searchCount || 0)).slice(0, 9);
};

export const getCarBySlug = (slug: string): Car | undefined => {
    return cars.find(car => car.slug === slug);
};

export const searchCars = (brand?: string, model?: string): Car[] => {
    return cars.filter(car => {
        if (brand && car.brand.toLowerCase() !== brand.toLowerCase()) return false;
        if (model && car.model.toLowerCase() !== model.toLowerCase()) return false;
        return true;
    });
};

export const getAllBrands = (): string[] => {
    return [...new Set(cars.map(car => car.brand))];
};

export const getModelsByBrand = (brand: string): string[] => {
    return [...new Set(cars.filter(car => car.brand.toLowerCase() === brand.toLowerCase()).map(car => car.model))];
};

export const getTotalIssuesCount = (): number => {
    return cars.reduce((total, car) => total + car.issues.length, 0);
};

export const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
        motor: 'Motor',
        sanziman: 'Şanzıman',
        elektronik: 'Elektronik',
        govde: 'Gövde/Kaporta',
        fren: 'Fren Sistemi',
        suspansiyon: 'Süspansiyon'
    };
    return labels[category] || category;
};

export const getRiskLabel = (risk: string): string => {
    const labels: Record<string, string> = {
        HIGH: 'YÜKSEK RİSK',
        MEDIUM: 'ORTA RİSK',
        LOW: 'DÜŞÜK RİSK'
    };
    return labels[risk] || risk;
};

export const getSimilarCars = (currentCar: Car): Car[] => {
    // 1. Filter out current car
    let candidates = cars.filter(c => c.slug !== currentCar.slug);

    // 2. Try to find cars in similar price range (+/- 25%) if price exists
    if (currentCar.price) {
        const minPrice = currentCar.price * 0.75;
        const maxPrice = currentCar.price * 1.25;
        const priceMatches = candidates.filter(c => c.price && c.price >= minPrice && c.price <= maxPrice);

        if (priceMatches.length >= 3) {
            return priceMatches.sort(() => 0.5 - Math.random()).slice(0, 3);
        }
    }

    // 3. Fallback: Return trending cars or random cars
    return candidates
        .filter(c => (c.searchCount || 0) > 1000)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
};
