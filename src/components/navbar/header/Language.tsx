import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";

const Language = () => {
	const pathname = usePathname();
	const { push: navigate } = useRouter();
	const params = useParams();

	const LanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		navigate(`/${e.target.value}${pathname.replace(`/${params.locale}`, "")}`);
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	return (
		<div>
			<select value={params.locale} onChange={LanguageChange}>
				<option value="ru">Русский</option>
				<option value="en">english</option>
				<option value="kz">Казакча</option>
			</select>
		</div>
	);
};

export default Language;
