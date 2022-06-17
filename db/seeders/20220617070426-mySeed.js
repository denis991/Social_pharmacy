module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const admin = [
      {
        name: 'admin', email: 'socialpharmacy@mail.ru', password: 'admin', age: '24', createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    const drugs = [
      {
        name: 'Эзомепразол', describe: 'Гастроэзофагеальная рефлюксная болезнь:-лечение эрозивного рефлюкс-эзофагита;-длительное поддерживающее лечение после заживления эрозивного рефлюкс-эзофагита для предотвращения рецидива;- симптоматическое лечение гастроэзофагеальной рефлюксной болезни.Язвенная болезнь желудка и двенадцатиперстной кишки', price: 389.00, discount: 0, img: 'https://images.apteka.ru/medium_a190917a-a68f-4bad-b989-0db211ec6b2f.webp', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Фамотидин', describe: ' − Язвенная болезнь 12-перстной кишки и желудка без малигнизации в фазе обострения, профилактика рецидивов; − гастроэзофагеальная рефлюксная болезнь; − другие состояния, сопровождающиеся гиперсекрецией желудочного сока (например, синдром Золлингера-Эллисона); − предупреждение аспирации желудочного сока при общей анестезии (синдром Мендельсона).', price: 46.99, discount: 0, img: 'https://images.apteka.ru/medium_8e011867-4e06-439b-a385-7736e380c0ce.webp', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Омепразол', describe: '- Язвенная болезнь желудка и двенадцатиперстной кишки, не ассоциированная с Helicobacter pylori (в том числе профилактика рецидивов); - Гастроэзофагеальная рефлюксная болезнь (ГЭРБ); - Эрадикация Helicobacter pylori у инфицированных пациентов с язвенной болезнью желудка и двенадцатиперстной кишки, а также при других заболеваниях, при которых требуется проведение эрадикации (в составе комбинированной терапии). - Гиперсекреторные состояния (синдром Золлингера-Эллисона, стрессовые язвы ЖКТ, полиэндокринный аденоматоз, системный мастоцитоз и другие). - Профилактика и лечение повреждений слизистой оболочки желудка и двенадцатиперстной кишки, обусловленных приемом нестероидных противовоспалительных препаратов (НПВП): диспепсия, эрозии слизистой оболочки, пептическая язва. - Профилактика аспирации кислого содержимого желудка в дыхательные пути во время общей анестезии (синдром Мендельсона).', price: 55.99, discount: 51.99, img: 'https://images.apteka.ru/medium_707bd8da-06d7-4a5a-be83-5b4c3d8ae267.webp', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Антропин', describe: 'Для расширения зрачка и достижения паралича аккомодации: определение истинной рефракции глаза, исследование глазного дна; создание функционального покоя при воспалительных заболеваниях глаза (в т.ч. при ирите, иридоциклите, хориоидите, кератите), при травмах глаза, эмболии и спазме центральной артерии сетчатки.', price: 53, discount: 0, img: 'https://images.apteka.ru/medium_d4cc4310-6324-4f9f-9ef0-0c4417804ce6.webp', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Бисакодил', describe: 'Гипотонические и атонические запоры. Регулирование стула при геморрое, проктите, анальных трещинах. Подготовка к хирургическим операциям, инструментальным и рентгенологическим исследованиям', price: 27.59, discount: 26.99, img: 'https://images.apteka.ru/medium_3ca54163-79af-4a3b-9932-627b37a3e172.webp', createdAt: new Date(), updatedAt: new Date(),
      },
    ];
    await queryInterface.bulkInsert('Products', drugs, {});
    await queryInterface.bulkInsert('Users', admin, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};