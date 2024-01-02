
let filter_btn = document.querySelectorAll('.filter-btn');
let tab_items = document.querySelectorAll('.tab-item');

for (let i = 0; i < filter_btn.length; i++) {
  filter_btn[i].addEventListener('click', function () {
    for (let j = 0; j < filter_btn.length; j++) {
      filter_btn[j].classList.remove('active');
    }
    let select_tab = filter_btn[i].getAttribute('data-tab');
    filter_btn[i].classList.add('active');
    for (let t = 0; t < tab_items.length; t++) {
      document.querySelector('.tab-filter-item-container')
      if (tab_items[t].classList.contains(select_tab)) {
        tab_items[t].classList.add('select_tab');
      } else {
        tab_items[t].classList.remove('select_tab');
      }
    }
  });
}

for (let th = 0; th < tab_items.length; th++) {
  document.querySelector('.tab-filter-item-container').style.height =
    tab_items[th].scrollHeight + 'px';
}



function startCounting(targetId, endValue, step, interval) {
  var numberContainer = document.getElementById(targetId);
  var currentNumber = 0;
  function updateNumber() {
    if (currentNumber <= endValue) {
      numberContainer.innerHTML = `${currentNumber}+`;
      currentNumber += step;
    }
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        setInterval(updateNumber, interval);
        observer.disconnect();
      }
    });
  });

  observer.observe(numberContainer);
}

document.addEventListener('DOMContentLoaded', function () {
  startCounting('number-1', 403, 4, 25);
  startCounting('number-2', 203, 4, 25);
  startCounting('number-3', 203, 4, 25);
  startCounting('number-4', 8, 1, 100);
});

const openTab = (tabName) => {
  const tabs = [
    'firt',
    'second',
    'third',
    'forth',
    'fifth',
  ];

  tabs.forEach((tab) => {
    const tabButton = document.getElementById(`${tab}-btn`);

    if (tabButton) {
      tabButton.classList.remove("active");
    }
  });

  const clickedTabButton = document.getElementById(`${tabName}-btn`);
  if (clickedTabButton) {
    clickedTabButton.classList.add("active");
  }

  tabs.forEach((tab) => {
    const element = document.getElementById(tab);
    if (element) {
      if (tab === tabName) {
        element.style.display = "block";
        element.classList.add("fadeZoomIn");
      } else {
        element.style.display = "none";
        element.classList.add("fadeZoomIn");
      }
    }
  });
};


