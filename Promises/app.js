// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Timeout :(");
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

//Callback Hell
// fakeRequestCallback(
//   "google.com/page1",
//   function (response) {
//     console.log("It worked!!!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("It worked Again!!!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("It worked 3rd time!!!");
//             console.log(response);
//           },
//           function (err) {
//             console.log("Error 3rd time!!!", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("Error 2nd time!!!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("Error!!!", err);
//   }
// );

//Promise version
// const request = fakeRequestPromise("google.com");
// request
//   .then(() => {
//     console.log("Promise Resolved");
//     fakeRequestPromise("google.com/page2")
//       .then(() => {
//         console.log("Promise 2 Resolved");
//         fakeRequestPromise("google.com/page3")
//           .then(() => {
//             console.log("Promise 3 Resolved");
//           })
//           .catch(() => {
//             console.log("Promise 3 Timed Out");
//           });
//       })
//       .catch(() => {
//         console.log("Promise 2 Timed Out");
//       });
//   })
//   .catch(() => {
//     console.log("Promise Timed Out");
//   });

//Promise Version with returns
//This method allows you to return the next url without nesting
//Also allows you to use one catch statement for it all
fakeRequestPromise("google.com")
  .then((data) => {
    console.log("Promise 1 Worked!");
    console.log(data);
    //This returns for you to use with the next .then
    return fakeRequestPromise("google.com/page2");
  })
  .then((data) => {
    console.log("Promise 2 Worked!!!");
    console.log(data);
    return fakeRequestPromise("google.com/page3");
  })
  .then((data) => {
    console.log(data);
    console.log("Promise 3 Worked!!");
  })
  .catch(() => {
    console.log("NOOO, A REQUEST FAILED!!!");
  });

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page3)");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO, A REQUEST FAILED!!!");
//     console.log(err);
//   });
