import dayjs from 'dayjs';


const StartnEndTimeConverter = (d) => {


const dayjsObject = dayjs(d); // Replace `$d` with your actual Dayjs object

const time = dayjsObject.format('HH:mm'); // Start time in HH:mm format


    return {time}
};

export default StartnEndTimeConverter;