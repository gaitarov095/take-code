type UserTagProps = {
    user: string;
}

export const UserTag = ({ user }: UserTagProps) => {
	return <p className='text-[#cbd5e1] text-lg'>{user}</p>;
};