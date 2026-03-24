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
