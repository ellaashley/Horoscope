var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Please pick a month", "Please pick a day", "Please pick a month and day", "That is not a valid date. Please choose again"];
var messages = [", have you been trying to learn about a subject for a long time? Have books, lectures, and documentaries on the subject been your primary form of entertainment? Whatever you've been hoping to gain from it could come to you today. If it's a business advantage, you've got it. If it's knowledge for its own sake, you know a lot by now. Whatever it is, bask in the glow of your achievement.",
", some interesting dreams could come to you tonight. Don't be fooled by confusing symbolism. These dreams could shed light on business concerns you've been trying to work out. Make a list of the symbols and see what they're trying to tell you. Then if it makes sense, act on it. Your dreams are probably only revealing what your subconscious has already worked out.",
", a social event, perhaps related to business, could put you in touch with an old friend or two you haven't seen for a long time. You'll have a wonderful time catching up. In fact, you have more in common now than you did before. If you're single, you might think of this person as a potential romantic partner. Go slowly, but have fun!",
", you may have a lot of professional or personal calls to make today. Emails could flood your inbox. A lot of people could vie for your attention. Your ego will receive a much-needed boost from all the acknowledgment. Don't be embarrassed or guilty. Everyone needs a pat on the back now and then. Relax and enjoy the spotlight!",
", recent study of philosophical or spiritual matters might inspire you to express your insights creatively. Whether you choose to write, make music, or paint pictures, you'll notice a difference in your style. This may not last, as it's at least partially due to what's on your mind now, but make the most of it today. You might produce quality work that surprises even you.",
", is a member of your household away? Your home could be a lonely place for a while. You miss your housemate, but you also enjoy the solitude and the quiet that enables you to catch up on your projects, which may include sleep! Dreams that come to you tonight could bring insights to solutions for business and finance. Write them down in the morning. You'll want to remember them.",
", a social event could land you in the middle of a room full of writers, artists, and teachers. You might not know any of them, but don't panic. Just listen to what they have to say. Your interest could attract their attention, and you could make some new friends. You might also attract invitations to future parties like this. Accept them! You'll be glad you did.",
", if you've been reading about health and fitness and putting what you read into action, today you might suddenly feel the results of your efforts. You feel physically and mentally strong, healthy, and energetic. This could put you in just the right mood to give some extra attention to the matter. Take care not to obsess over it. You're doing fine.",
", you look especially attractive today. Your communications skills are good. While romantic matters are low-key, love relationships could still advance. Interesting conversations with your love interest could reveal parts of you that your friend finds intriguing, and bring up interests in common that you didn't know you had. Make the most of it!",
", business acquaintances could visit you today. They might stay longer than expected, but this is positive. You'll have a lot of interesting discussions that open up doors to more promising enterprises and ways to make a success of them. If you get distracted and talk about other things, what does it matter? Relax and enjoy yourself.",
", group activities and other social events should keep you pretty busy. You have a lot of people to see, calls to make, errands to run. This can be a drag, but it's exciting and exhilarating as well. You'll be satisfied with the results. Some of the people should be especially congenial and might become friends. Relax and get busy.",
", career success, particularly involving writing, teaching, and other communication skills, could come your way today. You may not be aware that it's coming, so it could be a bit difficult to handle at first. Still, you've been working toward this goal for a long time, and you'll be glad to hear the news. In the evening, go out with friends to celebrate. You've earned it!",
" ",
" ",
" ",
" ",
];
var images = ["img/aq.png", "img/pisces.png", "img/aries.png", "img/taurus.png", "img/gemini.png", "img/cancer.png", "img/leo.png", "img/virgo.png", "img/libra.png", "img/scorpio.png", "img/sag.png", "img/cap.png"];

function determineSign(month,day){
    if(month == 2 && day>29){
        return 15;
    }
    if(month == 0 && day == 0){
        return 14;
    }
    if(month==0){
        return 12;
    }
    if(day==0){
        return 13;
    }
    if(month==1 && day>=20 || month ==2 && day<=18){
        return 0;
    }
    if(month==2 && day>=19 && day<=29|| month==3 && day<=20){
        return 1;
    }
    if(month==3 && day>=21 || month==4 && day<=19){
        return 2;
    }
    if(month==4 && day>=20 || month==5 && day<=20){
        return 3;
    }
    if(month==5 && day>=21 || month==6 && day<=20){
        return 4;
    }
    if(month==6 && day>=21 || month==7 && day<=22){
        return 5;
    }
    if(month==7 && day>=23 || month==8 && day<=22){
        return 6;
    }
    if(month==8 && day>=23 || month==9 && day<=22){
        return 7;
    }
    if(month==9 && day>=23 || month==10 && day<=22){
        return 8;
    }
    if(month==10 && day>=23 || month==11 && day<=21){
        return 9;
    }
    if(month==11 && day>=22 || month==12 && day<=21){
        return 10;
    }
    if(month==12 && day>=22 || month==1 && day<=19){
        return 11;
    }
}

function birthday(month,day){
    var bday = "";
    var today = new Date();
    var thisDay = today.getDate();
    var thisMonth = today.getMonth() + 1;
    if(month == thisMonth && day == thisDay){
        bday = "Happy Birthday! "
    }
    return bday;
}

function noName(x){
    var name = document.getElementById("name").value;
    if(name == ""){
        name = "Mysterious person";
    }
    return name;
}

function onSubmit(){
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var yourSign = determineSign(month,day);
    var name = document.getElementById("name").value;
    if(name == ""){
        name = "Hi, mysterious person";
    }
    var bday = birthday(month,day);
    document.getElementById("sign").innerHTML = signs[yourSign] +".";
    document.getElementById("message").innerHTML = bday +name +messages[yourSign];
    document.getElementById("image").src = images[yourSign];
}

