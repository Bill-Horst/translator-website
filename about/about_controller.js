(function() {
  'use strict';

  angular
  .module('translator-site')
  .controller('aboutController', Controller);

  Controller.$inject = ['$rootScope'];

  function Controller($rootScope) {
    let vm = this;

    let initController = function() {
      vm.title = ABOUT_TRANSLATIONS.getLanguage($rootScope.language).title;
      vm.introTitle = ABOUT_TRANSLATIONS.getLanguage($rootScope.language).introTitle;
      vm.aboutParagraph = ABOUT_TRANSLATIONS.getLanguage($rootScope.language).aboutParagraph;
      vm.backgroundParagraph = ABOUT_TRANSLATIONS.getLanguage($rootScope.language).backgroundParagraph;
      vm.backgroundParagraphFollowup = ABOUT_TRANSLATIONS.getLanguage($rootScope.language).backgroundParagraphFollowup;
    }

    initController();

    $rootScope.$on('changeLanguage' , function(event, data) {
      $rootScope.language = data;
      initController();
    });
  }

})();

const ABOUT_TRANSLATIONS = (function() {

  const japanese = {
    title: '自己紹介',
    introTitle: '翻訳者・ソフトウェアエンジニア',
    aboutParagraph: '夏ゅだが治43前ヱクイ携国し一票よぴ倫30表ょぴえ関去品レヱ就皇いめ転雄ロメヒ聞近レき展欺ねゆけじ。第広オヲ祀一ノフナ浮批ム竹業ほ頭断ラつ世約ナ児市専カ敏政ぶぼ先公び盛27教イワハチ訃合トそ進7愛披暑棚と。',
    backgroundParagraph: '夏ゅだが治43前ヱクイ携国し一票よぴ倫30表ょぴえ関去品レヱ就皇いめ転雄ロメヒ聞近レき展欺ねゆけじ。第広オヲ祀一ノフナ浮批ム竹業ほ頭断ラつ世約ナ児市専カ敏政ぶぼ先公び盛27教イワハチ訃合トそ進7愛披暑棚と。',
    backgroundParagraphFollowup: '夏ゅだが治43前ヱクイ携国し一票よぴ倫30表ょぴえ関去品レヱ就皇いめ転雄ロメヒ聞近レき展欺ねゆけじ。第広オヲ祀一ノフナ浮批ム竹業ほ頭断ラつ世約ナ児市専カ敏政ぶぼ先公び盛27教イワハチ訃合トそ進7愛披暑棚と。'
  };
  const english = {
    title: 'About',
    introTitle: 'Translator / Software Engineer',
    aboutParagraph: 'Currently working as a software engineer, Bill embraces all things tech. He delights in learning about - and creating - new software that will be used by millions of people world-wide. He enjoys reading tech-related articles in both English and Japanese and loves to stay current with the latest trends in technology. He has also written tech-related articles for a software engineer training school.',
    backgroundParagraph: 'A Colorado Springs native, he grew up in a multi-cultural environment and has been exposed to many different languages and cultures since childhood. Currently, the source language for the majority of translation work he does is Japanese.',
    backgroundParagraphFollowup: 'Bill lived and worked in Japan from 2009 to 2015 and is familiar with the customs of Japan and nuances of the Japanese language. He enjoys translating general as well as technical articles related to technology.'
  }

  const getLanguage = (language) => {
    if (language === 'japanese') {
      return japanese;
    } else {
      return english;
    }
  }

  return {
    getLanguage
  }
})();
