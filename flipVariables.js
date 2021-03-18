/***************************************************************************/
let english = "english";
let chinese = " chinese";
let img = "img";
let h1FRONT = document.querySelector(".front h1");
let h1BACK = document.querySelector(".back h1");
let h2BACK = document.querySelector(".back h2");
let color = "color";
let background = "background";
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let wordNr, bkgNr;
let goBack = document.querySelector(".previous");
let body = document.querySelector("body");
let indexPrev = -2;
let last = 0;

let words = [
    /*
    {
        english : "",
        chinese : "", 
        img : ""
    },

    */
    {
        english : "I",
        chinese : "Wǒ", 
        img : "我"
    },
    {
        english : "You",
        chinese : "Nǐ", 
        img : "你"
    },
    {
        english : "He",
        chinese : "Tā", 
        img : "他"
    },
    {
        english : "She",
        chinese : "Tā", 
        img : "她"
    },
    {
        english : "It",
        chinese : "Tā", 
        img : "它"
    },
    {
        english : "(Plural Maker)",
        chinese : "Men", 
        img : "们"
    },
    {
        english : "Hello",
        chinese : "Nǐ hǎo", 
        img : "你好"
    },
    {
        english : "Good Bye",
        chinese : "Zàijiàn", 
        img : "再见"
    },
    {
        english : "One",
        chinese : "Yī", 
        img : "一"
    },
    {
        english : "Two",
        chinese : "Èr", 
        img : "二"
    },
    {
        english : "Three",
        chinese : "Sān", 
        img : "三"
    },
    {
        english : "Four",
        chinese : "Sì", 
        img : "四"
    },
    {
        english : "Five",
        chinese : "Wǔ", 
        img : "五"
    },
    {
        english : "Six",
        chinese : "Liù", 
        img : "六"
    },
    {
        english : "Seven",
        chinese : "Qī", 
        img : "七"
    },
    {
        english : "Eight",
        chinese : "Bā", 
        img : "八"
    },
    {
        english : "Nine",
        chinese : "Jiǔ", 
        img : "九"
    },
    {
        english : "Ten",
        chinese : "Shí", 
        img : "十"
    },
    {
        english : "Zero",
        chinese : "Líng", 
        img : "零 / ○"
    },
    {
        english : "Eleven",
        chinese : "Shí Yī", 
        img : "十一"
    },
    {
        english : "Twenty",
        chinese : "Èr Shí", 
        img : "二十"
    },
    {
        english : "Hundred",
        chinese : "Bǎi", 
        img : "百"
    },
    {
        english : "Call",
        chinese : "Jiào", 
        img : "叫"
    },
    {
        english : "Last Name",
        chinese : "Xìng", 
        img : "姓"
    },
    {
        english : "What",
        chinese : "Shén me", 
        img : "什么"
    },
    {
        english : "First Name",
        chinese : "Míng zì", 
        img : "名字"
    },
    {
        english : "Li (name) ",
        chinese : "Lǐ", 
        img : "李"
    },
    {
        english : "Hua (name)",
        chinese : "Huá", 
        img : "华"
    },
    {
        english : "Wáng (name)",
        chinese : "Wáng", 
        img : "王"
    },
    {
        english : "Zhang (name)",
        chinese : "Zhāng", 
        img : "张"
    },
    {
        english : "Ming",
        chinese : "Míng", 
        img : "明"
    },
    {
        english : "(What about you?)",
        chinese : "Ne", 
        img : "呢"
    },
    {
        english : "Recognize",
        chinese : "Rèn", 
        img : "认"
    },
    {
        english : "Knowledge",
        chinese : "Shí", 
        img : "识"
    },
    {
        english : "To know (sb), To Understand",
        chinese : "Rènshí", 
        img : "认识"
    },
    {
        english : "High",
        chinese : "Gāo", 
        img : "高"
    },
    {
        english : "Happy",
        chinese : "Gāoxìng", 
        img : "高兴"
    },
    {
        english : "Very",
        chinese : "Hěn", 
        img : "很"
    },
    {
        english : "And Also",
        chinese : "Yě", 
        img : "也"
    },
    {
        english : "Drink",
        chinese : "Hē", 
        img : "喝"
    },
    {
        english : "Tea",
        chinese : "Chá", 
        img : "茶"
    },
    {
        english : "Water",
        chinese : "Shuǐ", 
        img : "水"
    },
    {
        english : "To Eat",
        chinese : "", 
        img : ""
    },
    {
        english : "Fish",
        chinese : "Chī", 
        img : "吃"
    },
    {
        english : "Noodles",
        chinese : "Miàn", 
        img : "面"
    },
    {
        english : "Rice",
        chinese : "Fàn", 
        img : "飯"
    },
    {
        english : "Doctor",
        chinese : "Yīshēng", 
        img : "医生"
    },
    {
        english : "Teacher",
        chinese : "Lǎoshī", 
        img : "老师"
    },
    {
        english : "Student",
        chinese : "Xuéshēng", 
        img : "学生"
    },
    {
        english : "To Be",
        chinese : "Shì", 
        img : "是"
    },
    {
        english : "Not",
        chinese : "Bù", 
        img : "不"
    },
    {
        english : "(Question Maker)",
        chinese : "ma", 
        img : "吗"
    },
    {
        english : "Phone",
        chinese : "Diànhuà", 
        img : "电话"
    },
    {
        english : "Number",
        chinese : "Hàomǎ", 
        img : "号码"
    },
    {
        english : "(Possession Mark)",
        chinese : "的", 
        img : "De"
    },
    {
        english : "How many / much?",
        chinese : "Duōshǎo", 
        img : "多少"
    },
    {
        english : "China",
        chinese : "Zhōngguó", 
        img : "中国"
    },
    {
        english : "America",
        chinese : "Měiguó", 
        img : "美国"
    },
    {
        english : "England",
        chinese : "Yīngguó", 
        img : "英国"
    },
    {
        english : "Person",
        chinese : "Rén", 
        img : "人"
    },
    {
        english : "Chinese",
        chinese : "Hànyǔ", 
        img : "汉语"
    },
    {
        english : "English",
        chinese : "Yīngyǔ", 
        img : "英语"
    },
    {
        english : "Country",
        chinese : "Guó", 
        img : "国"
    },
    {
        english : "All / Both",
        chinese : "Dōu", 
        img : "都"
    },
    {
        english : "Where",
        chinese : "Nǎ", 
        img : "哪"
    },
    {
        english : "Correct",
        chinese : "Duì", 
        img : "对"
    },
    {
        english : "Incorrect",
        chinese : "Bùduì", 
        img : "不对"
    },
    {
        english : "Canada",
        chinese : "Jiānádà", 
        img : "加拿大"
    },
    {
        english : "Today",
        chinese : "Jīntiān", 
        img : "今天"
    },
    {
        english : "Morning",
        chinese : "Zǎoshang", 
        img : "早上"
    },
    {
        english : "Busy",
        chinese : "Máng", 
        img : "忙"
    },
    {
        english : "How is it going?",
        chinese : "Ni Zěnme yàng", 
        img : "你怎么样"
    },
    {
        english : "Good Morning",
        chinese : "Zǎoshang hǎo / Zǎo ān", 
        img : "早上好 / 早安"
    },
    {
        english : "Taiwan",
        chinese : "Táiwān", 
        img : "台湾"
    },
    {
        english : "London",
        chinese : "Lúndūn", 
        img : "伦敦"
    },
    {
        english : "Hong Kong",
        chinese : "Xiānggǎng", 
        img : "香港"
    },
    {
        english : "Beijing",
        chinese : "Běijīng", 
        img : "北京"
    },
    {
        english : "In / Located In",
        chinese : "zài", 
        img : "在"
    },
    {
        english : "Home / House",
        chinese : "Jiā", 
        img : "家"
    },
    {
        english : "To Live",
        chinese : "Zhù", 
        img : "住"
    },
    {
        english : "Sorry",
        chinese : "Duìbùqǐ", 
        img : "对不起"
    },
    {
        english : "No Worries",
        chinese : "Méiguānxì", 
        img : "没关系"
    },
    {
        english : "Thank You",
        chinese : "Xièxiè", 
        img : "谢谢"
    },
    {
        english : "You are Welcome",
        chinese : "Bù kèqì", 
        img : "不客气"
    },
    {
        english : "Good Bye",
        chinese : "Zàijiàn", 
        img : "再见"
    },
    {
        english : "Mother",
        chinese : "Māmā", 
        img : "妈妈"
    },
    {
        english : "Father",
        chinese : "Bàbà", 
        img : "爸爸"
    },
    {
        english : "Younger Sister",
        chinese : "Mèimei", 
        img : "妹妹"
    },
    {
        english : "Older Sister",
        chinese : "Jiějiě", 
        img : "姐姐"
    },
    {
        english : "Younger Brother",
        chinese : "Dìdì", 
        img : "弟弟"
    },
    {
        english : "Older Brother",
        chinese : "Gēgē", 
        img : "哥哥"
    },
    {
        english : "Family",
        chinese : "Jiārén", 
        img : "家人"
    },
    {
        english : "To love",
        chinese : "Ài", 
        img : "爱"
    },
    {
        english : "To Have",
        chinese : "Yǒu", 
        img : "有"
    },
    {
        english : "Who /Whom ",
        chinese : "Shéi", 
        img : "谁"
    },
    {
        english : "And",
        chinese : "Hé", 
        img : "和"
    },
    {
        english : "That",
        chinese : "Nà", 
        img : "那"
    },
    {
        english : "That one",
        chinese : "Nàgè", 
        img : "那个"
    },
    {
        english : "This one",
        chinese : "Zhège", 
        img : "这个"
    },
    {
        english : "This",
        chinese : "Zhè", 
        img : "这"
    },
    {
        english : "Please",
        chinese : "Qǐng", 
        img : "请"
    },
    {
        english : "To ask",
        chinese : "Wèn", 
        img : "问"
    },
    {
        english : "Excuse me (for getting the attention of sbd)",
        chinese : "Qǐngwèn", 
        img : "请问"
    },
    {
        english : "Again",
        chinese : "Zài", 
        img : "再"
    },
    {
        english : "To say",
        chinese : "Shuō", 
        img : "说"
    },
    {
        english : "Times",
        chinese : "Cì", 
        img : "次"
    },
    {
        english : "Once",
        chinese : "Yīcì", 
        img : "一次"
    },
    {
        english : "To know",
        chinese : "Zhīdào", 
        img : "知道"
    },
    {
        english : "To help",
        chinese : "Bāngzhù", 
        img : "帮助"
    },
    // {
    //     english : "",
    //     chinese : "", 
    //     img : ""
    // },
    // {
    //     english : "",
    //     chinese : "", 
    //     img : ""
    // },
    // {
    //     english : "",
    //     chinese : "", 
    //     img : ""
    // },
    // {
    //     english : "",
    //     chinese : "", 
    //     img : ""
    // },
    
]
let backgrounds = [
    {
        color: '#6dd5ed',
        background: "background : linear-gradient(to top,#2193b0, #6dd5ed);"
    },

    {
        color: '#bd3f32',
        background: "background: linear-gradient(to right, #cb356b, #bd3f32);"
    },

    {
        background: "background : linear-gradient(to top,#0f2027, #203a43, #2c5364);",
        color: '#2c5364'
    },
    {
        background: "background: linear-gradient(to top,#12c2e9, #c471ed, #f64f59);",
        color: '#f64f59'
    },
    {
        background: "background: linear-gradient(to top,#373b44, #4286f4);",
        color: '#4286f4'
    },
    {
        background: "background: linear-gradient(to top,#2980b9, #6dd5fa, #ffffff);",
        color: '#6dd5fa'
    },
    {
        background: "background: linear-gradient(to top, #493240, #ff0099);",
        color: '#493240'
    },
    {
        background: "background: linear-gradient(to top,#aa4b6b, #6b6b83, #3b8d99);",
        color: '#3b8d99'
    },
    {
        background: "background: linear-gradient(to top,#7f7fd5, #86a8e7, #91eae4);",
        color: '#91eae4'
    },
    {
        background:"background: linear-gradient(to top,#f12711, #f5af19);",
        color: '#f5af19'
    },
    {
        background: "background: linear-gradient(to top,#c31432, #240b36);",
        color: '#240b36'
    },
    {
        background:     "background: linear-gradient(to top,#8360c3, #2ebf91);",
        color: '#2ebf91'
    },
    {
        background: "background: linear-gradient(to top,#009fff, #ec2f4b);",
        color: '#ec2f4b'
    },
    {
        background: "background: linear-gradient(to top,#654ea3, #eaafc8);",
        color: '#eaafc8'
    },
    {
        background: "background: linear-gradient(to top,#1e9600, #fff200, #ff0000);",
        color: '#ff0000'
    },
    {
        background: "background: linear-gradient(to top,#da4453, #89216b);",
        color: '#89216b'
    },
    {
        background: "background: linear-gradient(to top,#355c7d, #6c5b7b, #c06c84);",
        color: '#c06c84'
    },
    {
        background: "background: linear-gradient(to top,#40e0d0, #ff8c00, #ff0080);",
        color: '#ff0080'
    },
    {
        background: "background: linear-gradient(to top,#23074d, #cc5333);",
        color: '#cc5333'
    },
    {
        background: "background: linear-gradient(to top,#800080, #ffc0cb);",
        color: '#ffc0cb'
    },
    {
        background: "background: linear-gradient(to top,#00f260, #0575e6);",
        color: '#0575e6'
    },
    {
        background: "background: linear-gradient(to top,#03001e, #7303c0, #ec38bc, #fdeff9);",
        color: '#ec38bc'
    }

]


/***************************************************************************/
front.style.transition = "transform 0.3s ease-in-out"
back.style.transition = "transform 0.3s 0.3s ease-in-out"

if(JSON.parse(localStorage.getItem("repeat")) == null){
    let repeat = new Array();
    localStorage.setItem("i", 0);
    localStorage.setItem("repeat", JSON.stringify(repeat))
}

setBkgF(); setWordF(); setBkgB(), setWordB();


