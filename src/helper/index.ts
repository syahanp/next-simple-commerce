export const formatRupiah = (num) => {
    if (typeof num === 'string' || typeof num === 'number')  {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    return num
};