let i = sessionStorage.getItem('count')
        ? parseInt(sessionStorage.getItem('count'))
        : 0

      const timer = function () {
        i = i + 1
        document.getElementById('timer').innerText =
          'Form aperto da: ' + i;
        sessionStorage.setItem('count', i)
      }

      setInterval(timer, 1000)