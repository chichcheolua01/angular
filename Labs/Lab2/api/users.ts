import instance from "./instance"

export const getAllUser = () => {
    return instance.get("/users")
}