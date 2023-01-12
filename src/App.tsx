import "./App.css";
import { useState } from "react";
import HeroImg from "./assets/bg-pattern-desktop.svg";
import HeroImg1 from "./assets/illustration-woman-online-desktop.svg";
import HeroImg2 from "./assets/illustration-box-desktop.svg";
import Arrow from "./assets/icon-arrow-down.svg";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { data } from "./data";

function App() {
	const [open, setOpen] = useState<number | null>(null);

	const handleOpen = (value: number) => {
		setOpen(open === value ? null : value);
	};

	const dataHtml = data.map((item, index) => {
		return (
			<Accordion
				open={open === index}
				id={String(index)}
				key={index}
				className="max-w-[350px]  border-b-[1px] border-r-DarkGrayishBlue px-4">
				<AccordionHeader
					onClick={() => handleOpen(index)}
					className="w-full flex items-center justify-between ">
					<p
						className={`py-3 text-[15px] lg:text-[16px] text-VeryDarkGrayishBlue hover:text-SoftRed ${
							open === index && "font-bold"
						}`}>
						{item.question}
					</p>
					<img
						className={`absolute right-4 ${open === index && "rotate-180"}`}
						src={Arrow}
						alt=""
					/>
				</AccordionHeader>
				<AccordionBody className="pb-4  pr-16 lg:pr-6 text-[12px] lg:text-[13px] text-DarkGrayishBlue ease-in-out">
					{item.answer}
				</AccordionBody>
			</Accordion>
		);
	});

	return (
		<div className="text-[16px] font-KumbhSans bg-gradient-to-t from-SoftBlue to-SoftViolet max-h-fit min-h-screen flex justify-center items-start">
			<div>
				<main
					className="bg-white translate-y-[20px] rounded-2xl max-w-[360px] lg:max-w-4xl mt-32 z-10
			flex flex-col lg:flex-row lg:items-start justify-center pb-10 lg:h-[28rem] lg:p-12  lg:overflow-hidden ">
					<div className="relative -translate-y-[110px] lg:translate-y-0 lg:flex-1 lg:mb-0  -mb-[70px]">
						<img
							className="absolute w-[240px] translate-x-[55px] lg:w-[400px] lg:scale-[1.8] lg:-translate-x-[250px] lg:-translate-y-10 -top-[30px] "
							src={HeroImg}
							alt="Shade of logo"
						/>
						<img
							className="w-[240px] translate-x-[55px]  lg:w-[500px] lg:-translate-x-[100px] -top-[30px]"
							src={HeroImg1}
							alt="Logo"
						/>
						<img
							className="absolute top-[65px] lg:hidden w-[100px] lg:-translate-x-20 translate-x-[55px] lg:translate-y-[5.2rem] lg:scale-150 "
							src={HeroImg2}
							alt="dice"
						/>
					</div>
					<div className="lg:flex-2 lg:-translate-x-10">
						<div className="flex flex-col justify-center items-center lg:items-start">
							<h1 className="text-3xl pl-4 font-bold text-VeryDarkBlue text-center  mb-4">FAQ</h1>
							{dataHtml}
						</div>
					</div>
				</main>
				<img
					className="absolute invisible lg:visible top-[65px] w-[100px] lg:-translate-x-10 lg:translate-y-[19rem] lg:scale-[2]"
					src={HeroImg2}
					alt="dice"
				/>
			</div>
		</div>
	);
}

export default App;
