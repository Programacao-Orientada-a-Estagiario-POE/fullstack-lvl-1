function init() {
  const main = document.getElementById('main');
  data.forEach((value) => {
    addCard(main, value);
  });
}

function addCard(ref, value) {
  const card = document.createElement('div');
  card.className = 'card';
  ref.appendChild(card);

  const contentImg = document.createElement('div');
  contentImg.className = 'content-img';
  card.appendChild(contentImg);

  const img = document.createElement('img');
  img.src = value.image;
  img.alt = value.name;
  contentImg.appendChild(img);

  const title = document.createElement('h2');
  title.className = 'title';
  title.innerText = value.name;
  contentImg.appendChild(title);

  const subtitle = document.createElement('p');
  subtitle.className = 'subtitle';
  subtitle.innerText = value.title;
  contentImg.appendChild(subtitle);

  const blurb = document.createElement('p');
  blurb.className = 'blurb';
  blurb.innerText = value.blurb;
  contentImg.appendChild(blurb);
}

init();
