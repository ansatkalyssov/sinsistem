/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/assets/css/site.min.css","e179932495c51ac864e265c0c50a8121"],["/assets/css/vendor.min.css","33321c42670ddd4e58fe5e8e9ceb5c7c"],["/assets/img/ad/formbuider-online-2xbanner.gif","7308ffa21c8179bb7c89cd1bef83961f"],["/assets/img/android-icon-144x144.png","08a8df9fc1e823baa28c6ec151ecc5d1"],["/assets/img/android-icon-192x192.png","f0928b530305d0f7bcaa123436ee8edc"],["/assets/img/android-icon-36x36.png","007f4bb2fbd0e966c2b9ac5584099489"],["/assets/img/android-icon-48x48.png","e1a2710bb6b7d14798e8aa0c96700e78"],["/assets/img/android-icon-72x72.png","3f825c72e22c374627356b3c70f9dd07"],["/assets/img/android-icon-96x96.png","e162ed743c8c9f3f855dec3c0798ec6b"],["/assets/img/apple-icon-114x114.png","35c44bda06e033374d82f175a7fb2dd4"],["/assets/img/apple-icon-120x120.png","c9dd1737b67f0849cae7c5cd2a720916"],["/assets/img/apple-icon-144x144.png","08a8df9fc1e823baa28c6ec151ecc5d1"],["/assets/img/apple-icon-152x152.png","348b8f20d77715258ba86be14080a163"],["/assets/img/apple-icon-180x180.png","600d26ff561a51ed0051ecd1f595191d"],["/assets/img/apple-icon-57x57.png","c8f3b239676bd505d6e0271984e9a06c"],["/assets/img/apple-icon-60x60.png","b189f332ca220c5385d99c2535760bcc"],["/assets/img/apple-icon-72x72.png","3f825c72e22c374627356b3c70f9dd07"],["/assets/img/apple-icon-76x76.png","cf73468154ed3d3a79b6c5e42565af6f"],["/assets/img/apple-icon-precomposed.png","f97a24f2e6c699b1360f4931cc77db03"],["/assets/img/apple-icon.png","f97a24f2e6c699b1360f4931cc77db03"],["/assets/img/demo-background.svg","0b233b0750554bcbd70050eb1698bbab"],["/assets/img/favicon-16x16.png","50b4d81391eb5c3b3dfb3329c2ec23e4"],["/assets/img/favicon-32x32.png","ae85a5b78f524c8795cfd4b0851b0f07"],["/assets/img/favicon-96x96.png","e162ed743c8c9f3f855dec3c0798ec6b"],["/assets/img/fb-logo.png","89dad973417ccb97814ede777ac6f103"],["/assets/img/fb-logo.svg","5ff981ff4bb4d49c9275f2556c402127"],["/assets/img/icon_download.png","91905475187752230ad51a395d7fdf1d"],["/assets/img/ms-icon-144x144.png","08a8df9fc1e823baa28c6ec151ecc5d1"],["/assets/img/ms-icon-150x150.png","b587093e068b254cd4402a2c3776978e"],["/assets/img/ms-icon-310x310.png","45c2ac9fb0a0c9cb3c7a989e998ace58"],["/assets/img/ms-icon-70x70.png","89cfb2c9342aeaed42929dd9135ae4e3"],["/assets/img/noise.png","223b1d4a446a59e4fad2e16d8900237b"],["/assets/img/screenshot.png","60240da3f6a9b1923878d54da400872b"],["/assets/js/form-builder.min.js","8e75b51393becf166d77f19362f79fa2"],["/assets/js/form-render.min.js","abc08f194b3c75b74e0059ecdff8a563"],["/assets/js/site.min.js","de6b34e5c0cde4312d77e02bd3033277"],["/assets/js/vendor.min.js","100593628aabac8e84b729c8baa889fb"],["/docs/404.html","cea313d0de4a039b1504692a0262963f"],["/docs/contributing/index.html","c05f1510002eef6748d51004253c9000"],["/docs/css/site.css","ed843f543c8bdf8199c9ccfb079cffb9"],["/docs/css/theme.css","27031d050bc38bae24a94c82d4f172ab"],["/docs/css/theme_extra.css","ba933899bbe8a760c3c39dfe748aa55f"],["/docs/development/index.html","77d850e2211351b071486213a857dbe3"],["/docs/editing-fonts/index.html","4b419d0d8f66135845721ff52909a159"],["/docs/fonts/fontawesome-webfont.eot","5ae23ad29b67289a1375d2043e289c52"],["/docs/fonts/fontawesome-webfont.svg","f99a231ed57ee113b50b1c3e9f9fcdc3"],["/docs/fonts/fontawesome-webfont.ttf","8cca2f02b0af2da365ff4d1755f29146"],["/docs/fonts/fontawesome-webfont.woff","b683029bafe0305ac2234038a03e1541"],["/docs/formBuilder/actions/addField/index.html","69f3fef05fad2109d508de3f0b161b9a"],["/docs/formBuilder/actions/clearFields/index.html","dbad878b2b0756b4656d04f90c28ce4b"],["/docs/formBuilder/actions/closeAllFieldEdit/index.html","bf8be7bbed1983123c4b3a1497d642f0"],["/docs/formBuilder/actions/getData/index.html","a2cc98bef9271a8fade7175ddd3ae10c"],["/docs/formBuilder/actions/removeField/index.html","6bc1ae30573dab22903ec17199e6243f"],["/docs/formBuilder/actions/save/index.html","c65d1d1124f4d2f6e3660c0de345a261"],["/docs/formBuilder/actions/setData/index.html","23427afb63215a4d52a0619b12a81018"],["/docs/formBuilder/actions/setLang/index.html","a47a2662e38669cc8b8cba60aca26965"],["/docs/formBuilder/actions/showData/index.html","293cdb82d7d793cb7d5813e625952337"],["/docs/formBuilder/actions/toggleAllFieldEdit/index.html","9298df5b8dbec2f00a2c67b086e8789e"],["/docs/formBuilder/actions/toggleFieldEdit/index.html","bb015d09bff64b9124ffcc7e2a208a9f"],["/docs/formBuilder/control-plugins/index.html","08eb18005082723b0fafa1e96c520c4c"],["/docs/formBuilder/controls/index.html","2b66e5fcbc46b75b34c5ca159ccb207a"],["/docs/formBuilder/demos/angular/index.html","18826c956492b7a9f9c267b50ab74489"],["/docs/formBuilder/demos/basic/index.html","a8f27cb89d9485f9c9f29d6e08b9a6fa"],["/docs/formBuilder/demos/bootstrap-grid/index.html","f758a97bf3a4abf9c52b6d7243e3e0be"],["/docs/formBuilder/demos/data/index.html","bad626084b44dc6a15da72aa2b3a76a0"],["/docs/formBuilder/demos/react/index.html","d054565628c90a68f7b4e61731b21d2f"],["/docs/formBuilder/demos/tabs/index.html","80dc9c6bee15bce6e617daacd5151bbd"],["/docs/formBuilder/demos/toggle-builder/index.html","0115fec46dac5dab6c0cdc302c059e8c"],["/docs/formBuilder/demos/translation/index.html","c7c82b6b74246d1d54ba43eabaad0e49"],["/docs/formBuilder/options/actionButtons/index.html","9ee6dc15a62d6e0af10d67e2690cc996"],["/docs/formBuilder/options/allowStageSort/index.html","7b208a855808d40f75e081c3baf140cf"],["/docs/formBuilder/options/appendPrepend/index.html","fcaf73cdfd629b6d2a96d57f8e038a06"],["/docs/formBuilder/options/controlOrder/index.html","0191d00c2c310eff8803ae3ff1f07d2f"],["/docs/formBuilder/options/controlPosition/index.html","396cdb0dedb46c84189cdaf3cb546428"],["/docs/formBuilder/options/dataType/index.html","3cabad985f73d27145c8d9d3519896f3"],["/docs/formBuilder/options/defaultFields/index.html","92f664d3e49866d2de5752b6e1e59ca5"],["/docs/formBuilder/options/disableFields/index.html","735b875daca093117dd5d13ae4230063"],["/docs/formBuilder/options/disableHTMLLabels/index.html","571ee9a5d243401304a10ccaa13ad72d"],["/docs/formBuilder/options/disableInjectedStyle/index.html","567089c26b6e712e1c600b919c0247ce"],["/docs/formBuilder/options/disabledActionButtons/index.html","516b9a02992b21d08c9025b7ae04bcf0"],["/docs/formBuilder/options/disabledAttrs/index.html","29d97e2fd999233c48f687fedc5024f3"],["/docs/formBuilder/options/disabledFieldButtons/index.html","619a94d5bd69e03d129db4459c2d05ae"],["/docs/formBuilder/options/disabledSubtypes/index.html","301e364bfc33c43c2b90e84fe2b63c78"],["/docs/formBuilder/options/editOnAdd/index.html","531c86a44d38aa17a332bc2248b0b995"],["/docs/formBuilder/options/fieldRemoveWarn/index.html","9994428e1e505c5a0d0c44e67180acfd"],["/docs/formBuilder/options/fields/index.html","f0b9e6b57d145de490344ade1cb3d637"],["/docs/formBuilder/options/formData/index.html","d07328b625a3e42316711d626f6b4d9e"],["/docs/formBuilder/options/i18n/index.html","d6cce020e7b2fd8ca2baeab670e7c016"],["/docs/formBuilder/options/inputSets/index.html","963b13671b44d1a6acd017295725a1ff"],["/docs/formBuilder/options/layout/index.html","9f04fdc7053025d60f6aa0541c2ba66c"],["/docs/formBuilder/options/layoutTemplates/index.html","b0da3d56d6763f1b4170734fa1ff84c4"],["/docs/formBuilder/options/notify/index.html","814c13b9cf3da38911bd1c4039038719"],["/docs/formBuilder/options/onAddField/index.html","613cc935cbd809a58b3620f1c67d7031"],["/docs/formBuilder/options/onClearAll/index.html","718f3f9b48f4fddafc0fce54ce956ac9"],["/docs/formBuilder/options/onCloseFieldEdit/index.html","284963b9f75d8eb6dcce7fbc630874e8"],["/docs/formBuilder/options/onOpenFieldEdit/index.html","c7c50ed4eafea97822e1f1eecee54006"],["/docs/formBuilder/options/onSave/index.html","93742fc9839c80cfccd3af357afedf7b"],["/docs/formBuilder/options/replaceFields/index.html","2a7cce0606f1b799501af462da3d3f57"],["/docs/formBuilder/options/roles/index.html","183833ec8517db30ca66c5f4c17d1cc5"],["/docs/formBuilder/options/scrollToFieldOnAdd/index.html","96866d3f921cad310da92c9fd8a9877b"],["/docs/formBuilder/options/showActionButtons/index.html","51003577ae738199e1604ae924990b7d"],["/docs/formBuilder/options/sortableControls/index.html","2fe297392d699c87f37be2e8158ae0df"],["/docs/formBuilder/options/stickyControls/index.html","a8375f4912dd9f470a3b6d049994d47c"],["/docs/formBuilder/options/subtypes/index.html","24d218f9af4d49d5adef10236ab86355"],["/docs/formBuilder/options/templates/index.html","f6754e7a927a8d52cb400e44efe09bb4"],["/docs/formBuilder/options/typeUserAttrs/index.html","bfccc857628b7a5dc75a9da5f2c7baa2"],["/docs/formBuilder/options/typeUserDisabledAttrs/index.html","4120d540a48a90c4717c3ca5f1782755"],["/docs/formBuilder/options/typeUserEvents/index.html","de0aaf08ffa051abfdca6f740e5bc6de"],["/docs/formBuilder/overview/index.html","bfd19738a9e3e9f739ea08810c524e42"],["/docs/formBuilder/promise/index.html","5e3f657fdd9dc853d0a4c8a2e76221ee"],["/docs/formRender/actions/clear/index.html","63298b653c4f763d646eaf32adb11cf0"],["/docs/formRender/actions/html/index.html","4c39e6bf87b238d612d41c56f7e8cb7f"],["/docs/formRender/actions/render/index.html","156044ea39df0ab7570c1a51faf4655d"],["/docs/formRender/actions/setData/index.html","cdd760833dccbaba0ab537abccfc88a8"],["/docs/formRender/actions/userData/index.html","54dadeb5684a19c8fe0593b51c73b647"],["/docs/formRender/demos/basic/index.html","526442347451ca8b757a2b17b5847907"],["/docs/formRender/demos/preview-popup/index.html","ef2c80caa48d24f5ba66e1a43b0f2ac8"],["/docs/formRender/options/container/index.html","466289313d24dc3d760157484a1f341b"],["/docs/formRender/options/formData/index.html","20c03e6a6361b71d7fdafd2f126d24d5"],["/docs/formRender/options/index.html","3f628bd453493ef621a1ce04008745b4"],["/docs/formRender/options/layout/index.html","2b74cda9ea695b7f5a450f92de27cb7b"],["/docs/formRender/options/layoutTemplates/index.html","ea21c20f3196c0d545eb9199af3b06ca"],["/docs/formRender/options/render/index.html","c6691d203a477ab41e4fe9c55371cd64"],["/docs/getting-started/index.html","89061658c27c2846a1fb0df565472acd"],["/docs/img/clipboard.svg","c6b234719965cc10df0f8d12c1f438dd"],["/docs/img/logo-bg.svg","0b233b0750554bcbd70050eb1698bbab"],["/docs/img/noise.png","223b1d4a446a59e4fad2e16d8900237b"],["/docs/index.html","421bf4db170534710b075d94a2f7af41"],["/docs/js/jquery-2.1.1.min.js","e40ec2161fe7993196f23c8a07346306"],["/docs/js/modernizr-2.8.3.min.js","65f1d21d5fcc9d21da758adababd0c3c"],["/docs/js/scripts.js","ba2ed23b390d38aeef2172cf265dd3a3"],["/docs/js/theme.js","a7f80ae066ed55bc35c6d1ee785582df"],["/docs/license/index.html","26297b0947b98f3e3503f449a116baf0"],["/docs/search.html","6b645256dcbb008fabf5a4f1c55815e7"],["/docs/search/lunr.js","27d8781e7e362eabdd2ea3e90cde561d"],["/docs/search/main.js","61ce5cf946f95b533e34eb53005c0afa"],["/docs/search/worker.js","1e07ca56e326963f3f6ec4539ccdf2e7"],["/docs/theme/base.html","b575d61e5be0cde9f03be8d585ef8e22"],["/docs/theme/footer.html","e2a3d765413a9fb3e052ef1792a21542"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







