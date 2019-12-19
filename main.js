let req = new XMLHttpRequest;
req.open('GET', `https://www.reddit.com/r/apple.json`)
req.onload = () => {
    return obj = (JSON.parse(req.response))
}
req.send();
setTimeout(() => {
    obj.data.children.map(val => {
        function renderdata(val) {
            var section = document.querySelector(".section_2")
            var box = document.createElement('div')
            box.classList.add("box");
            var score = document.createElement('span')
            score.classList.add('score')
            score.innerHTML = `^<br>${val.data.score}<br>˅`
            var boxA = document.createElement("span")
            boxA.classList.add("box_1")
            var boxA1 = document.createElement("a")
            boxA1.innerText = "Posted by";
            var boxA2 = document.createElement("a")
            boxA2.classList.add("author")
            boxA2.innerText = `u/${val.data.author}`
            boxA3 = document.createElement('a')
            boxA3.classList.add('time')
            boxA3.innerText = "12 hours ago"
            boxA.append(boxA1, boxA2, boxA3)
            var boxB = document.createElement('span')
            boxB.classList.add("box_2")
            var boxB1 = document.createElement("a")
            boxB1.classList.add("link_flair_text")
            boxB1.innerText = val.data.link_flair_text
            var boxB2 = document.createElement('a')
            boxB2.classList.add('title')
            boxB2.innerText = val.data.title
            boxB.append(boxB1, boxB2)
            var boxC = document.createElement('span')
            boxC.classList.add('box_3')
            var boxC1 = document.createElement('a')
            boxC1.classList.add("slefText")
            boxC1.innerHTML = `${val.data.selftext.split("\n\n").join("<br><br>")}`
            boxC.append(boxC1);
            box.append(score, boxA, boxB, boxC)
            section.append(box)
        }
        return renderdata(val);
    })
}, 4000);