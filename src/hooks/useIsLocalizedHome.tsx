'use client'
import { usePathname } from "next/navigation";
import { PAGE } from "@/config/public-page.config";

export function useIsLocalizedHome() {
	const patch = usePathname();

	const homePaths = [PAGE.HOME, PAGE.KOVANYE, PAGE.KATANYE, PAGE.LITYE];

	return (
		homePaths.some((p) => patch.endsWith(p)) || /^\/(ru|en|kk)$/.test(patch)
	);
}
