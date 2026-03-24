function createSearchHandler() {
  let requestCount = 0;

  return function search(keyword) {
    requestCount++;
    const currentRequest = requestCount;

    setTimeout(function () {
      console.log("第几次请求:", currentRequest);
      console.log("关键词:", keyword);
    }, 1000);
  };
}

const search = createSearchHandler();

search("react");
search("nextjs");
search("typescript");

//闭包结合异步

function createTask(name) {
  let resolveFn;

  const promise = new Promise((resolve) => {
    resolveFn = resolve;
  });

  setTimeout(() => {
    resolveFn(name + " done");
  }, 1000);

  return promise;
}

const p = createTask("job1");

p.then((value) => {
  console.log(value);
});

console.log("sync end");

async function test() {
  try {
    const value = await Promise.reject("失败");
    console.log(value);
  } catch (err) {
    console.log("捕获到:", err);
  }
}
test();