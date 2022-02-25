import Head from "next/head";
import React from "react";
import Section1 from "../component/Section1";
import Section2 from "../component/Section2";
import Section3 from "../component/Section3";
import Section4 from "../component/Section4";
import Section5 from "../component/Section5";
import {
	Grid,
	AppBar,
	Hidden,
	SwipeableDrawer,
	IconButton,
	Box,
	List,
	ListItem,
	ListItemText,
	Toolbar,
	Divider,
} from "@mui/material";
import { useState } from "react";
import { Link as Scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
	{ name: "Home", link: "home", key: 1, offset: -80 },
	{ name: "About Us", link: "about", key: 2, offset: -70 },
	{ name: "Our Facilities", link: "facilities", key: 3, offset: -50 },
	{ name: "Contact Us", link: "contact", key: 4, offset: 0 },
];

const Index = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Head>
				<title>Cakrawala Music Production</title>
			</Head>
			<Hidden mdUp>
				<AppBar
					position="sticky"
					elevation={0}
					sx={{ backgroundColor: "white" }}
				>
					<Toolbar>
						<Grid
							container
							sx={{ minHeight: "8vh" }}
							direction="row"
							justifyContent="space-between"
							alignItems="center"
						>
							<Grid item>
								<img
									src="cakrawalalogo.png"
									style={{
										verticalAlign: "middle",
									}}
								/>
							</Grid>
							<Grid item>
								<IconButton
									sx={{
										color: "black",
										textAlign: "center",
										verticalAlign: "middle",
									}}
								>
									<MenuIcon onClick={() => setOpen(true)} />
								</IconButton>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</Hidden>
			<SwipeableDrawer
				open={open}
				anchor="top"
				onOpen={() => setOpen(true)}
				onClose={() => setOpen(false)}
			>
				<div>
					<Box textAlign="center" p={2}>
						<img
							src="cakrawalalogo.png"
							style={{
								verticalAlign: "middle",
							}}
						/>
					</Box>
					<Divider />
					<List>
						{pages.map((page) => {
							return (
								<React.Fragment key={page.key + 50}>
									<Scroll
										to={page.link}
										spy={true}
										smooth={true}
										offset={page.offset}
									>
										<ListItem button>
											<ListItemText
												primary={page.name}
												sx={{ textAlign: "center" }}
											/>
										</ListItem>
									</Scroll>
								</React.Fragment>
							);
						})}
					</List>
				</div>
			</SwipeableDrawer>
			<div id="home">
				<Section1 />
			</div>
			<div id="about">
				<Section2 />
			</div>
			<div id="facilities">
				<Section3 />
			</div>
			<div id="pricing">
				<Section4 />
			</div>
			<div id="contact">
				<Section5 />
			</div>
		</>
	);
};

export default Index;
