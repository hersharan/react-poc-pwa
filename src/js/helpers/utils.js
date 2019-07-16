import React from 'react';

/*
* Tabs on scroll handling.
*  It fixes the tabs on scroll near the header.
*
*/
export function handleScroll() {
  window.addEventListener('load', () => {
    const navbar = document.getElementsByClassName('nav-tabs');
    // Get the offset position of the navbar
    const sticky = navbar[0].offsetTop;
    window.addEventListener('scroll', () => {
      const { scrollTop } = document.documentElement;
      if (scrollTop > (sticky - 70)) {
        navbar[0].classList.add('nav-fixed');
        navbar[0].parentNode.classList.add('child-fixed');
      } else {
        navbar[0].classList.remove('nav-fixed');
        navbar[0].parentNode.classList.remove('child-fixed');
      }
    });
  });
}

export function filterData(data, activities) {
  const newData = data;
  let filteredData = [];
  if (!activities || activities.length === 0) {
    filteredData = data;
  }
  if (activities && activities.length > 0 && data && data.length > 0) {
    newData.forEach((item) => {
      let node = null;
      if (Object.prototype.hasOwnProperty.call(item, 'userBookmarkStatus')
        || Object.prototype.hasOwnProperty.call(item, 'userFavouriteStatus')
        || Object.prototype.hasOwnProperty.call(item, 'favourites')
        || Object.prototype.hasOwnProperty.call(item, 'bookmarks')
        || Object.prototype.hasOwnProperty.call(item, 'status')) {
        node = item;
      } else {
        activities.forEach((activity) => {
          if ((Object.prototype.hasOwnProperty.call(item, 'nid') && item.nid === activity.nid)
            || (Object.prototype.hasOwnProperty.call(item, 'tid') && item.tid === activity.tid)) {
            node = { ...item, ...activity };
          }
        });
      }

      filteredData.push(node);
    });
  }

  return filteredData;
}

export function getBrowserWidth() {
  if (window.innerWidth < 769) return 'xs';
  if (window.innerWidth < 992 && window.innerWidth > 768) return 'sm';
  if (window.innerWidth < 1199 && window.innerWidth > 991) return 'md';
  return 'lg';
};

export function getUrlByContentType(type, nid, tid) {
  let link = '';
  if (type === 'product_detail') {
    link = "/product/" + nid
  }
  else if (type === 'level_interactive_content') {
    link = "/interactive-content/" + nid
  }
  else if (type === 'tools' || type === 'tools-pdf') {
    if (tid && tid !== null) {
      link = `/folders/${tid}/${nid}`
    } else {
      link = "/folders/" + nid
    }
  }
  else if (type === 'stories') {
    link = "/trending/" + nid;
  }
  return link;
}

export function inlineLoading() {
  return <span className="inline-loading"><span>.</span><span>.</span><span>.</span></span>
}

// attach the .equals method to Array's prototype to call it on any array
export function compareArray(array1, array2) {
  // if the other array is a falsy value, return
  if (!array2)
    return false;

  // compare lengths - can save a lot of time
  if (array1.length !== array2.length)
    return false;

  for (var i = 0, l = array1.length; i < l; i++) {
    // Check if we have nested arrays
    if (array1[i] instanceof Array && array2[i] instanceof Array) {
      // recurse into the nested arrays
      if (!compareArray(array1[i], array2[i]))
        return false;
    }
    else if (array1[i] !== array2[i]) {
      // Warning - two different object instances will never be equal: {x:20} != {x:20}
      return false;
    }
  }

  return true;
}

export function uniqueData(data) {
  let flags = [], output = [], l = data.length - 1, i;
  let filteredData = data.filter((item) => {
    return item !== null;
  })
  if (filteredData && filteredData.length !== 0) {
    for (i = l; i >= 0; i--) {
      if (flags[filteredData[i].nid]) continue;
      flags[filteredData[i].nid] = true;
      output.push(filteredData[i]);
    }
  }

  return output;
}


export function replaceData(data, newdata) {
  let actualData = data;
  if (actualData && actualData.length === 0) {
    return newdata;
  }
  else if (newdata && newdata.length !== 0) {
    newdata.forEach((item, i) => {
      data.forEach((itm, j) => {
        if (item.nid === itm.nid) {
          actualData[j] = item;
        }
      })
    })

    return actualData;
  }
}

export function removeDrupalToolbar() {
  const user = localStorage.getItem('user');
  const userDetails = JSON.parse(user);
  if (userDetails && !userDetails.policyFlag) {
    // if Drupal Admin bar presents then remove.
    if (document.getElementById('toolbar-administration')) {
      document.getElementById('toolbar-administration').remove();
    }
  }
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export function getStorageLimit() {
  return ((dispatch) => {
    if ('storage' in navigator && 'estimate' in navigator.storage) {
      navigator.storage.estimate()
        .then(function (estimate) {
          let data = {
            msg: `Using ${formatBytes(estimate.usage)} out of ${formatBytes(estimate.quota)} bytes.`,
            estimate: estimate,
          };
          dispatch({ type: 'FETCH_BROWSER_CACHE', payload: data });
        });
    } else {
      dispatch({ type: 'FETCH_BROWSER_CACHE', payload: null });
    }
  })
}