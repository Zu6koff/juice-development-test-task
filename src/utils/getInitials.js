export const getInitials = (full_name) => {
    const [first_name, last_name] = full_name.split(' ');

    return first_name[0] + last_name[0];
}