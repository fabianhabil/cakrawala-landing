import { ThemeProvider } from "@mui/styles";
import theme from "../src/theme";
import { useStyles } from "./styling/SectionStyle";
import {
	Grid,
	Container,
	Hidden,
	Typography,
	Button,
	ListItem,
	List,
	Card,
	CardMedia,
	CardContent,
	CardActions,
} from "@mui/material";
import React from "react";
import { Link as Scroll } from "react-scroll";

const menu1 = [
	"Vocal Recording",
	"Pitch Correction",
	"Mixing & Mastering (your music)",
	"Standard Video for Youtube",
];

const menu2 = [
	"Vocal Recording & Piano / Guitar Recording",
	"Pitch Correction",
	"Mixing & Mastering",
	"Standard Video for Youtube",
];

const menu2m = [
	"Vocal Recording",
	"Piano / Guitar Recording",
	"Pitch Correction",
	"Mixing & Mastering",
	"Standard Video for Youtube",
];

const menu3 = [
	"Basic Piano Arrangement",
	"Vocal Recording",
	"Pitch Correction",
	"Mixing & Mastering",
];

const menu4 = [
	"Band Arrangement",
	"Vocal Recording",
	"Pitch Correction",
	"Mixing and Mastering",
];

const Section4 = () => {
	const style = useStyles();
	return (
		<>
			<ThemeProvider theme={theme}>
				<Hidden mdDown>
					<Grid
						container
						className={style.section4}
						sx={{ minHeight: "100%" }}
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item>
							<Typography
								sx={{
									fontFamily: "Poppins",
									fontWeight: 700,
									fontSize: "32px",
									lineHeight: "48px",
									marginBottom: 2,
								}}
							>
								Recording Packages
							</Typography>
						</Grid>
						<Grid item>
							<Typography
								sx={{
									fontFamily: "Inter",
									fontWeight: "500",
									fontSize: "20px",
									lineHeight: "32px",
									color: "#BBBBBB",
									marginBottom: 2,
								}}
							>
								We always serve you with affordable price and satisfying
								services
							</Typography>
						</Grid>
						<Grid item>
							<Grid container spacing={2}>
								<Grid item md={3} sx={{ width: "25%" }}>
									<Grid
										container
										className={style.post}
										direction="column"
										justifyContent="space-between"
									>
										<CardContent>
											<Grid item>
												<Typography className={style.harga}>
													IDR 299.000
												</Typography>
											</Grid>
											<Grid item>
												<Typography
													className={style.namaPaket}
													sx={{ marginBottom: 1 }}
												>
													Basic Soloist
												</Typography>
											</Grid>
											<Grid item>
												<Grid container direction="column" spacing={1}>
													{menu1.map((menu, index) => {
														return (
															<React.Fragment key={index + 5}>
																<List disablePadding sx={{ p: 0 }}>
																	<ListItem sx={{ p: 0, py: "12px" }}>
																		<img
																			src="./check.png"
																			style={{
																				verticalAlign: "middle",
																				marginRight: 10,
																			}}
																		/>
																		<Typography className={style.isiPaket}>
																			{menu}
																		</Typography>
																	</ListItem>
																</List>
															</React.Fragment>
														);
													})}
												</Grid>
											</Grid>
										</CardContent>
										<Grid
											item
											xs={12}
											md={12}
											sx={{ marginLeft: "auto", marginRight: "auto" }}
										>
											<Scroll
												to={"contact"}
												spy={true}
												smooth={true}
												offset={0}
											>
												<Button
													className={style.buttonPaket}
													sx={{ marginTop: "4vh" }}
												>
													<Typography className={style.hurufButtonPaket}>
														Choose Plan
													</Typography>
												</Button>
											</Scroll>
										</Grid>
									</Grid>
								</Grid>
								<Grid item md={3} sx={{ width: "25%" }}>
									<Grid
										container
										className={style.post}
										direction="column"
										justifyContent="space-between"
									>
										<CardContent>
											<Grid item>
												<Typography className={style.harga}>
													IDR 399.000
												</Typography>
											</Grid>
											<Grid item>
												<Typography
													className={style.namaPaket}
													sx={{ marginBottom: 1 }}
												>
													Basic Musician
												</Typography>
											</Grid>
											<Grid item>
												<Grid container direction="column" spacing={1}>
													{menu2.map((menu, index) => {
														return (
															<React.Fragment key={index + 5}>
																<List disablePadding sx={{ p: 0 }}>
																	<ListItem sx={{ p: 0, py: "12px" }}>
																		<img
																			src="./check.png"
																			style={{
																				verticalAlign: "middle",
																				marginRight: 10,
																			}}
																		/>
																		<Typography className={style.isiPaket}>
																			{menu}
																		</Typography>
																	</ListItem>
																</List>
															</React.Fragment>
														);
													})}
												</Grid>
											</Grid>
										</CardContent>
										<Grid
											item
											xs={12}
											md={12}
											sx={{ marginLeft: "auto", marginRight: "auto" }}
										>
											<Scroll
												to={"contact"}
												spy={true}
												smooth={true}
												offset={0}
											>
												<Button
													className={style.buttonPaket}
													sx={{ marginTop: "4vh" }}
												>
													<Typography className={style.hurufButtonPaket}>
														Choose Plan
													</Typography>
												</Button>
											</Scroll>
										</Grid>
									</Grid>
								</Grid>
								<Grid item md={3} sx={{ width: "25%" }}>
									<Grid
										container
										className={style.post}
										direction="column"
										justifyContent="space-between"
									>
										<CardContent>
											<Grid item>
												<Typography className={style.harga}>
													Full Slot
												</Typography>
											</Grid>
											<Grid item>
												<Typography
													className={style.namaPaket}
													sx={{ marginBottom: 1 }}
												>
													Silver Soloist
												</Typography>
											</Grid>
											<Grid item>
												<Grid container direction="column" spacing={1}>
													{menu3.map((menu, index) => {
														return (
															<React.Fragment key={index + 5}>
																<List disablePadding sx={{ p: 0 }}>
																	<ListItem sx={{ p: 0, py: "12px" }}>
																		<img
																			src="./check.png"
																			style={{
																				verticalAlign: "middle",
																				marginRight: 10,
																			}}
																		/>
																		<Typography className={style.isiPaket}>
																			{menu}
																		</Typography>
																	</ListItem>
																</List>
															</React.Fragment>
														);
													})}
												</Grid>
											</Grid>
										</CardContent>
										<Grid
											item
											xs={12}
											md={12}
											sx={{ marginLeft: "auto", marginRight: "auto" }}
										>
											<Scroll
												to={"contact"}
												spy={true}
												smooth={true}
												offset={0}
											>
												<Button
													className={style.buttonPaket}
													sx={{ marginTop: "4vh" }}
												>
													<Typography className={style.hurufButtonPaket}>
														Choose Plan
													</Typography>
												</Button>
											</Scroll>
										</Grid>
									</Grid>
								</Grid>
								<Grid item md={3} sx={{ width: "25%" }}>
									<Grid
										container
										className={style.post}
										direction="column"
										justifyContent="space-between"
									>
										<CardContent>
											<Grid item>
												<Typography className={style.harga}>
													Full Slot
												</Typography>
											</Grid>
											<Grid item>
												<Typography
													className={style.namaPaket}
													sx={{ marginBottom: 1 }}
												>
													Premium Soloist
												</Typography>
											</Grid>
											<Grid item>
												<Grid container direction="column" spacing={1}>
													{menu4.map((menu, index) => {
														return (
															<React.Fragment key={index + 5}>
																<List disablePadding sx={{ p: 0 }}>
																	<ListItem sx={{ p: 0, py: "12px" }}>
																		<img
																			src="./check.png"
																			style={{
																				verticalAlign: "middle",
																				marginRight: 10,
																			}}
																		/>
																		<Typography className={style.isiPaket}>
																			{menu}
																		</Typography>
																	</ListItem>
																</List>
															</React.Fragment>
														);
													})}
												</Grid>
											</Grid>
										</CardContent>
										<Grid
											item
											xs={12}
											md={12}
											sx={{ marginLeft: "auto", marginRight: "auto" }}
										>
											<Scroll
												to={"contact"}
												spy={true}
												smooth={true}
												offset={0}
											>
												<Button
													className={style.buttonPaket}
													sx={{ marginTop: "4vh" }}
												>
													<Typography className={style.hurufButtonPaket}>
														Choose Plan
													</Typography>
												</Button>
											</Scroll>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Hidden>
				<Hidden mdUp>
					<Grid container className={style.section4m}>
						<Grid container className={style.section4mp}>
							<Grid
								container
								direction="column"
								justifyContent="center"
								alignItems="center"
								sx={{ padding: 3 }}
							>
								<Grid
									container
									direction="column"
									justifyContent="center"
									alignItems="center"
									spacing={3}
								>
									<Grid item>
										<Typography
											sx={{
												fontFamily: "Poppins",
												fontWeight: 700,
												fontSize: "24px",
												lineHeight: "36px",
											}}
										>
											Recording Packages
										</Typography>
									</Grid>
									<Grid
										item
										sx={{
											minWidth: "41vh",
										}}
									>
										<Grid
											container
											direction="column"
											justifyContent="center"
											alignItems="center"
											sx={{
												backgroundColor: "#FEF5F5",
												padding: 3,
												borderRadius: "12px",
												minWidth: "41vh",
											}}
										>
											<Grid item>
												<Typography className={style.namaPaketm}>
													Basic Soloist
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={style.isiPaketm}>
													IDR 299.000
												</Typography>
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												{menu1.map((menu, index) => {
													return (
														<React.Fragment key={index + 5}>
															<Grid
																container
																direction="row"
																// justifyContent="center"
																alignItems="center"
																sx={{ wrap: "noWrap", mb: 1 }}
															>
																<Grid item xs={1}>
																	<img
																		src="./check.png"
																		style={{ verticalAlign: "middle" }}
																	/>
																</Grid>
																<Grid item xs={11}>
																	<Typography
																		className={style.isiPaket}
																		sx={{ marginLeft: 2 }}
																	>
																		{menu}
																	</Typography>
																</Grid>
															</Grid>
														</React.Fragment>
													);
												})}
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												<Grid
													container
													justifyContent="center"
													alignItems="center"
												>
													<Grid item>
														<Scroll
															to={"contact"}
															spy={true}
															smooth={true}
															offset={0}
															// activeClass="active"
														>
															<Button
																sx={{
																	backgroundColor: "rgba(244, 150, 209, 0.2)",
																	borderRadius: "24px",
																	color: "#F496D1",
																	"&:hover": {
																		backgroundColor: "#F496D1",
																		color: "white",
																	},
																	"&:active": {
																		backgroundColor: "#F496D1",
																	},
																	height: "50px",
																	width: "200px",
																}}
															>
																<Typography className={style.hurufButtonPaket}>
																	Choose Plan
																</Typography>
															</Button>
														</Scroll>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<Grid
										item
										sx={{
											minWidth: "41vh",
										}}
									>
										<Grid
											container
											direction="column"
											justifyContent="center"
											alignItems="center"
											sx={{
												backgroundColor: "#FEF5F5",
												padding: 3,
												borderRadius: "12px",
												minWidth: "41vh",
											}}
										>
											<Grid item>
												<Typography className={style.namaPaketm}>
													Basic Musician
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={style.isiPaketm}>
													IDR 399.000
												</Typography>
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												{menu2m.map((menu, index) => {
													return (
														<React.Fragment key={index + 5}>
															<Grid
																container
																direction="row"
																// justifyContent="center"
																alignItems="center"
																sx={{ wrap: "noWrap", mb: 1 }}
															>
																<Grid item xs={1}>
																	<img
																		src="./check.png"
																		style={{ verticalAlign: "middle" }}
																	/>
																</Grid>
																<Grid item xs={11}>
																	<Typography
																		className={style.isiPaket}
																		sx={{ marginLeft: 2 }}
																	>
																		{menu}
																	</Typography>
																</Grid>
															</Grid>
														</React.Fragment>
													);
												})}
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												<Grid
													container
													justifyContent="center"
													alignItems="center"
												>
													<Grid item>
														<Scroll
															to={"contact"}
															spy={true}
															smooth={true}
															offset={0}
															// activeClass="active"
														>
															<Button
																sx={{
																	backgroundColor: "rgba(244, 150, 209, 0.2)",
																	borderRadius: "24px",
																	color: "#F496D1",
																	"&:hover": {
																		backgroundColor: "#F496D1",
																		color: "white",
																	},
																	"&:active": {
																		backgroundColor: "#F496D1",
																	},
																	height: "50px",
																	width: "200px",
																}}
															>
																<Typography className={style.hurufButtonPaket}>
																	Choose Plan
																</Typography>
															</Button>
														</Scroll>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<Grid item sx={{ minWidth: "41vh" }}>
										<Grid
											container
											direction="column"
											justifyContent="center"
											alignItems="center"
											sx={{
												backgroundColor: "#FEF5F5",
												padding: 3,
												borderRadius: "12px",
												minWidth: "41vh",
											}}
										>
											<Grid item>
												<Typography className={style.namaPaketm}>
													Silver Soloist
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={style.isiPaketm}>
													Full Slot
												</Typography>
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												{menu3.map((menu, index) => {
													return (
														<React.Fragment key={index + 5}>
															<Grid
																container
																direction="row"
																// justifyContent="center"
																alignItems="center"
																sx={{ wrap: "noWrap", mb: 1 }}
															>
																<Grid item xs={1}>
																	<img
																		src="./check.png"
																		style={{ verticalAlign: "middle" }}
																	/>
																</Grid>
																<Grid item xs={11}>
																	<Typography
																		className={style.isiPaket}
																		sx={{ marginLeft: 2 }}
																	>
																		{menu}
																	</Typography>
																</Grid>
															</Grid>
														</React.Fragment>
													);
												})}
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												<Grid
													container
													justifyContent="center"
													alignItems="center"
												>
													<Grid item>
														<Scroll
															to={"contact"}
															spy={true}
															smooth={true}
															offset={0}
															// activeClass="active"
														>
															<Button
																sx={{
																	backgroundColor: "rgba(244, 150, 209, 0.2)",
																	borderRadius: "24px",
																	color: "#F496D1",
																	"&:hover": {
																		backgroundColor: "#F496D1",
																		color: "white",
																	},
																	"&:active": {
																		backgroundColor: "#F496D1",
																	},
																	height: "50px",
																	width: "200px",
																}}
															>
																<Typography className={style.hurufButtonPaket}>
																	Choose Plan
																</Typography>
															</Button>
														</Scroll>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
									<Grid item sx={{ minWidth: "41vh" }}>
										<Grid
											container
											direction="column"
											justifyContent="center"
											alignItems="center"
											sx={{
												backgroundColor: "#FEF5F5",
												padding: 3,
												borderRadius: "12px",
												minWidth: "41vh",
											}}
										>
											<Grid item>
												<Typography className={style.namaPaketm}>
													Premium Soloist
												</Typography>
											</Grid>
											<Grid item>
												<Typography className={style.isiPaketm}>
													Full Slot
												</Typography>
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												{menu4.map((menu, index) => {
													return (
														<React.Fragment key={index + 5}>
															<Grid
																container
																direction="row"
																// justifyContent="center"
																alignItems="center"
																sx={{ wrap: "noWrap", mb: 1 }}
															>
																<Grid item xs={1}>
																	<img
																		src="./check.png"
																		style={{ verticalAlign: "middle" }}
																	/>
																</Grid>
																<Grid item xs={11}>
																	<Typography
																		className={style.isiPaket}
																		sx={{ marginLeft: 2 }}
																	>
																		{menu}
																	</Typography>
																</Grid>
															</Grid>
														</React.Fragment>
													);
												})}
											</Grid>
											<Grid item sx={{ mt: 2 }}>
												<Grid
													container
													justifyContent="center"
													alignItems="center"
												>
													<Grid item>
														<Scroll
															to={"contact"}
															spy={true}
															smooth={true}
															offset={0}
															// activeClass="active"
														>
															<Button
																sx={{
																	backgroundColor: "rgba(244, 150, 209, 0.2)",
																	borderRadius: "24px",
																	color: "#F496D1",
																	"&:hover": {
																		backgroundColor: "#F496D1",
																		color: "white",
																	},
																	"&:active": {
																		backgroundColor: "#F496D1",
																	},
																	height: "50px",
																	width: "200px",
																}}
															>
																<Typography className={style.hurufButtonPaket}>
																	Choose Plan
																</Typography>
															</Button>
														</Scroll>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Hidden>
			</ThemeProvider>
		</>
	);
};

export default Section4;
