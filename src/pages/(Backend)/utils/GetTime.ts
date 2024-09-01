export const getTimeLeft = (countdownTargetDate) => {
    const totalTimeLeft = countdownTargetDate - new Date();
    // console.log("Get",countdownTargetDate,totalTimeLeft);
    
    const Days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const Hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const Minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const Seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return { Days, Hours, Minutes, Seconds };
  };