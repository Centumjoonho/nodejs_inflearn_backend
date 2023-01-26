export function getToday() {
    const created = new Date();
    const yyyy = created.getFullYear();
    const mm = created.getMonth() + 1;
    const dd = created.getDate();
    const today = `${yyyy}-${mm}-${dd}`
    return today;
}