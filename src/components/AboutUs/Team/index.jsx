import React from "react";
import { Grid } from "@mui/material";
import { FaTelegramPlane, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Team.scss";

const teamCardAnimation = {
    hidden: {
        y: 150,
        opacity: 0,
    },
    visible: (custom) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: custom * 0.2,
        },
    }),
};

const Team = () => {
    const myTeam = [
        {
            id: 1,
            fullName: "Doniyor Nurmatov",
            job: "Full-stack Developer",
            img:
                "https://cdn.pixabay.com/photo/2015/08/05/04/25/people-875617_960_720.jpg",
        },
        {
            id: 2,
            fullName: "Askar Abdullayev",
            job: "Back-end Developer",
            img:
                "https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_960_720.jpg",
        },
        {
            id: 3,
            fullName: "Davron Sulaymonov",
            job: "Front-end Developer",
            img:
                "https://cdn.pixabay.com/photo/2019/10/22/13/43/man-4568762_960_720.jpg",
        },
        {
            id: 4,
            fullName: "Baxtiyor Erkinov",
            job: "Front-end Developer",
            img:
                "https://cdn.pixabay.com/photo/2020/06/26/14/46/india-5342927_960_720.jpg",
        },
    ];

    return (
        <motion.div
            className="team__container"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
        >
            <div className="team">
                <div className="team__title">
                    <motion.p
                        className="team__title__item"
                        custom={1}
                        variants={teamCardAnimation}
                    >
                        PROFESSIONALS
                    </motion.p>
                </div>
                <div className="team__title__2">
                    <motion.h1
                        className="team__title__2__item"
                        custom={2}
                        variants={teamCardAnimation}
                    >
                        Our Team
                    </motion.h1>
                </div>
                <div className="team__title__desc">
                    <motion.p
                        className="team__title__desc__item"
                        custom={3}
                        variants={teamCardAnimation}
                    >
                        So upon land can't Together beginning set great us
                        you're had green firmament life. There over were bearing
                        to forth subdue days.
                    </motion.p>
                </div>
            </div>
            <motion.div
                className="team__members"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, once: true }}
            >
                <Grid container spacing={4}>
                    {myTeam.map((item, index) => (
                        <Grid item md={4} sm={6} xs={12} key={item.id}>
                            <motion.div
                                className="team__member"
                                custom={index}
                                variants={teamCardAnimation}
                            >
                                <div className="team__member__img">
                                    <img
                                        className="team__member__img__item"
                                        src={item.img}
                                        alt="developer"
                                    />
                                </div>
                                <div className="team__member__fullName">
                                    <h4 className="team__member__fullName__item">
                                        {item.fullName}
                                    </h4>
                                </div>
                                <div className="team__member__job">
                                    <p className="team__member__job__item">
                                        {item.job}
                                    </p>
                                </div>
                                <div className="team__member__social__networks">
                                    <span className="team__member__social__networks__item">
                                        <FaInstagram />
                                    </span>
                                    <span className="team__member__social__networks__item">
                                        <FaTelegramPlane />
                                    </span>
                                    <span className="team__member__social__networks__item">
                                        <FaLinkedinIn />
                                    </span>
                                </div>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </motion.div>
        </motion.div>
    );
};

export default Team;
