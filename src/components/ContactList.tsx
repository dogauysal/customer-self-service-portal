import IUser from "../models/IUser";
import ContactRow from "./ContactRow";

interface IProps {
    Users: IUser[]
}

const ContactList: React.FC<IProps> = ({
    Users
}) => {

    return (
        <>
            {Users.map((user, i) => (
                <ContactRow key={i} RowNumber={i} User={user} />
            ))}
        </>
    )
}

export default ContactList;