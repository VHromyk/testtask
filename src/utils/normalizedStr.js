const normalizedStr = (str, len) => {
    if (str.length > len) {
        return str.slice(0, len-3) + '...';
    }
    return str;
};

export default normalizedStr;