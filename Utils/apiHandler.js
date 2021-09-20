export async function getAllEvents() {
    try {
        const res = await fetch("https://nextjs-v-default-rtdb.firebaseio.com/events.json")
        const data = res.json();

        let arr = [];
        for (const key in data) {
            arr.push({
                id: key,
                ...data[key]
            })
        }
        return arr;
    }
    catch (err) {
        console.log(err);
    }
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
    const allEvents = await getAllEvents();
    return allEvents.find((event) => event.id === id);
}