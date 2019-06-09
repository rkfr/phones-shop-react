export const sortByAlpha = data => {
    return data.sort((a, b) => {
        const nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();
        
        return (nameA < nameB) ? -1 : 1;
    });
}

export const sortByNewest = data => {
    return data.sort((a, b) => a.age - b.age);
}