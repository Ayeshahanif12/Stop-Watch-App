
    let milli = 0;
    let sec = 0;
    let min = 0;
    let hr = 0;
    let time = false;

    function start() {
        time = true;
        myfunc();
    }
    function stop() {
        time = false;

    }

    function reset() {
        location.reload()
    }
    
    function myfunc() {
        if (time === true) {
            milli = milli + 1;


            if (milli === 100) {
                sec = sec + 1;
                milli = 0;
            }

            if (sec === 60) {
                min = min + 1;
                sec = 0;
            }

            if (min === 60) {
                hr = hr + 1;
                min = 0;
            }

            let getmilli = milli;
            let getsec = sec;
            let getmin = min;
            let gethr = hr;
            if (milli < 10) {
                getmilli = "0" + milli;
            }
            if (sec < 10) {
                getsec = "0" + sec;
            }
            if (min < 10) {
                getmin = "0" + min;
            }
            if (hr < 10) {
                gethr = "0" + hr;
            }

            setTimeout(myfunc, 10);

            document.getElementById("milli").innerHTML = getmilli;
            document.getElementById("sec").innerHTML = getsec;
            document.getElementById("min").innerHTML = getmin;
            document.getElementById("hr").innerHTML = gethr;

        }
    }
