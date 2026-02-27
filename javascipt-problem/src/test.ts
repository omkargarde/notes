function debounce<T extends (...args: any[]) => any>(fn: T, delay = 500) {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...args);
    }, delay);
  };
}

function throttle<T extends (...args: any[]) => any>(fn: T, delay = 500) {
  let lastCall = 0;
  return function (...args: Parameters<T>) {
    let now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      fn(...args);
    }
  };
}

const log = debounce(function (i: number) {
  console.log("d", i);
});

const TLog = throttle(function (i: number) {
  console.log("t", i);
});

for (let i = 0; ; i++) {
  log(i);
  TLog(i);
}
