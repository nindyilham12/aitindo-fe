/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'headBan': "url('../images/bg-banner.png')",
        'bodyBan': "url('../images/bg-body.png')",
        'footerBan': "url('../images/bg-footer.png')",
        'bodymobileBan': "url('../images/bg-body-mobile.png')",
      },

      colors: {
        'brown-1': '#733900',
        'brown-2': '#8A4A0C',
        'brown-3': '#A55B13',
        'green-1': '#039B39',
      },

      fontFamily: {
        'lato': ['Lato'],
        'lora': ['Lora'],
        'intro': ['intro'],
        'open-sans': ['Open Sans']
      },

      fontSize: {
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '57': '57px',
        '58': '58px',
        '62': '62px',
        '72': '72px',
        '76': '76px'
      },

      lineHeight: {
        '4': '4px',
        '27': '27px',
        '41': '41px',
        '60': '60px'
      },

      maxWidth: {
        '433': '433px',
        '700': '700px'
      },

      spacing: {
        '11': '11px',
        '13': '13px',
        '15': '15px',
        '17': '17px',
        '18': '18px',
        '19': '19px',
        '21': '21px',
        '22': '22px',
        '23': '23px',
        '25': '25px',
        '26': '26px',
        '29': '29px',
        '31': '31px',
        '34': '34px',
        '35': '35px',
        '36': '36px',
        '37': '37px',
        '41': '41px',
        '42': '42px',
        '43': '43px',
        '45': '45px',
        '50': '50px',
        '51': '51px',
        '53': '53px',
        '54': '54px',
        '55': '55px',
        '56': '56px',
        '57': '57px',
        '60': '60px',
        '65': '65px',
        '68': '68px',
        '72': '72px',
        '74': '74px',
        '76': '76px',
        '77': '77px',
        '81': '81px',
        '86': '86px',
        '87': '87px',
        '88': '88px',
        '90': '90px',
        '94': '94px',
        '98': '98px',
        '100': '100px',
        '108': '108px',
        '122': '122px',
        '130': '130px',
        '135': '135px',
        '150': '150px',
        '165': '165px',
        '167': '167px',
        '182': '182px',
        '217': '217px',
        '269': '269px',
        '290': '290px',
        '365': '365px',
        '760': '760px',
        '900': '900px'
      },
    },
  },
  plugins: [],
}
