import s from "./Paginator.module.css";

let Paginator = ({currentPage, totalUsersCount, pageSize, onPageChanged}) => {
	let pagesCount = Math.ceil(totalUsersCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
			<div className={s.pagination}>
				{pages.map((p) => {
					return (
						<span
							key={p}
							className={
								currentPage === p && s.selectedPage
							}
							onClick={() => {
								onPageChanged(p);
							}}
						>
							{p}
						</span>
					);
				})}
			</div>
	);
};

export default Paginator;
