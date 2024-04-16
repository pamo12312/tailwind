import Image from "next/image";

export default function Home() {
    return (
        <div className={" font-Inter, sans-serif bg-bblack"}>
            <div className={"fixed w-screen flex justify-evenly items-center bg-bblack"}>
                <div className={"flex justify-evenly p-5"}>
                    <div>
                        <span className={"text-2xl text-violet-800"}>.</span>
                        <span className={"text-2xl text-white"}>ruby</span>
                        <button className={"ml-10 text-ctext bg-blacck rounded-xl p-2 shadow-md"}>Portfolio</button>
                    </div>
                </div>
                <div className={"flex gap-10 mr-5 text-white"}>
                    <button className={"p-3 rounded-3xl bg-blacck shadow-md"}>home.</button>
                    <button className={"p-3 rounded-3xl bg-blacck shadow-md"}>about me.</button>
                    <button className={"p-3 rounded-3xl bg-blacck shadow-md"}>works.</button>
                    <button className={"p-3 rounded-3xl bg-blacck shadow-md"}>blog.</button>
                    <button className={"p-3 rounded-3xl bg-blacck shadow-md"}>contact.</button>
                </div>
            </div>

            <div className={"pt-28 flex justify-center text-white p-2 gap-10 "}>
                <div>
                    <div
                        className={" w-96 flex border-solid border-2 border-blacck rounded-3xl p-5 shadow-md flex-col bg-blacck "}>
                        <div className={"items-center flex justify-between"}>

                            <div><Image alt={"g"} className={"bg-bimage rounded-full"} src="/foto.png" width={70} height={70}/>
                            </div>
                            <div><Image alt={"g"} src="/arrow.png" width={50} height={50}/></div>
                        </div>

                        <div className={"font-Inter, sans-serif text-white  text-5xl my-5"}>A Portfolio Brimming with
                            Innovation
                        </div>
                        <div className={"font-Inter, sans-serif text-lg text-bimage my-3"}>Patrik Moravec Freelancer
                        </div>
                    </div>

                </div>
                <div className={"w-96 flex border-solid    rounded-3xl flex-col p-2 shadow-md"}>
                    <div
                        className={"w-96 flex-row justify-between flex border-solid border-2 bg-blacck border-blacck rounded-3xl p-4  shadow-md "}>
                        <div>
                            <div className={" m-2 text-bimage text-2xl"}>Title</div>
                            <div className={" m-2 text-3xl"}>product Designer</div>
                        </div>
                        <Image alt={"g"} src="/star.png" width={70} height={20}/>


                    </div>
                    <div className={"flex flex-row w-96 "}>
                        <div
                            className={" bg-blacck border-solid border-2 border-blacck rounded-3xl p-4 m-2 shadow-md"}>
                            <Image alt={"g"} src="/twitter.png" width={50} height={60}/>
                        </div>
                        <div
                            className={" bg-blacck border-solid border-2 border-blacck rounded-3xl p-4 m-2 shadow-md"}>
                            <Image alt={"g"} src="/instagram.png" width={50} height={50}/>
                        </div>
                        <div
                            className={" bg-blacck border-solid border-2 border-blacck rounded-3xl p-4 m-2 shadow-md"}>
                            <Image alt={"g"} src="/www.png" width={50} height={50}/>
                        </div>
                        <div
                            className={" bg-blacck border-solid border-2 border-blacck rounded-3xl p-4 m-2 shadow-md"}>
                            <Image alt={"g"} src="/be.png" width={50} height={50}/>
                        </div>

                    </div>

                    <div
                        className={"w-96 flex-row justify-between flex border-solid border-2 bg-blacck border-blacck rounded-3xl p-4  shadow-md "}>
                        <div>
                            <div className={" m-2 text-bimage text-2xl"}>Sídlo</div>
                            <div className={" m-2 text-3xl"}>Prague,CZ</div>
                        </div>
                        <Image alt={"g"} src="/worldww.png" width={70} height={50}/>


                    </div>
                </div>


                <div
                    className={" w-96 flex gap-10 items-center justify-center flex-col border-solid border-2 bg-blacck border-blacck rounded-3xl p-2 shadow-md"}>
                    <div><Image alt={"g"} src="/socialr.png" width={60} height={60}/></div>
                    <div className={"text-4xl flex text-center"}>Chcete spolupracovat ?</div>
                    <div className={" text-2xl rounded-full bg-bbutton p-4"}>patri.moravec@email.cz</div>

                </div>


            </div>
            <div className={"text-white flex justify-center"}><Image alt={"g"} className={"pt-8"} src="/circlestar.png"
                                                                     width={105} height={56}/></div>
            <div className={"text-bimage flex justify-center text-xl"}>O mně sekce</div>
            <div className={" font-Inter, sans-serif text-4xl text-white justify-center flex p-5"}>Kdo je kreativní
                mysl?
            </div>


            <div className={"flex justify-center"}>
                <div className={"w-80 rounded-2xl bg-blacck text-center text-textpimg font-Caveat py-5"}>
                    <div className={"px-5"}><Image alt={"g"} className={"bg-bblack rounded-2xl pl-10 pr-10"} src="/emoji.png"
                                                   width={300} height={100}/></div>
                    <div className={"pt-2 text-xl"}>Odvaha redefinovat hranice :)</div>
                </div>
                <div className={" w-80 pl-10"}>
                    <div className={"text-white text-2xl pb-2"}>Patrik Moravec</div>
                    <div className={"text-ctext text-lg"}>Im Wei Chen, a passionate and experienced product designer,
                        coffee lover, art enthusiast based in Manhattan, NY. With over 7 years of expertise in the
                        field, I have dedicated myself to creating exceptional user experiences that blend functionality
                        and aesthetics seamlessly.
                    </div>

                </div>


            </div>
            <div className={" mt-10 text-white flex justify-center"}><Image alt={"g"} className={"pt-8"} src="/brickimg.png"
                                                                            width={80} height={56}/></div>
            <div className={"text-bimage flex justify-center text-xl"}>Portfolio Sekce</div>
            <div className={" font-Inter, sans-serif text-4xl text-white justify-center flex p-5"}>Ukázka Produktového
                Designu
            </div>

            <div className={"flex justify-center flex-wrap gap-20"}>
                <div
                    className={" bg-blacck felx-wrap max-w-max p-5 flex-col justify-between flex border-solid border-2 border-black rounded-3xl shadow-md"}>
                    <div className={"flex justify-between items-center"}>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Haze Template</div>
                            <div className={"text-ctext m-2 text-lg"}>SaaS Template for Haze</div>
                        </div>
                        <Image alt={"g"} src="/arrow.png" width={70} height={50}/>
                    </div>
                    <div className={"flex justify-center text-white"}>
                        <div className={"m-2"}><Image alt={"g"} className={"rounded-2xl"} src="/haze.png" width={500}
                                                      height={60}/></div>

                    </div>
                </div>


                <div
                    className={" bg-blacck max-w-max p-5 flex-col justify-between flex border-solid border-2 border-black rounded-3xl  shadow-md"}>
                    <div className={"flex justify-between items-center"}>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Members Template</div>
                            <div className={"text-ctext m-2 text-lg"}>Landing Page for Members</div>
                        </div>
                        <Image alt={"g"} src="/arrow.png" width={70} height={50}/>
                    </div>
                    <div className={"flex justify-center text-white"}>
                        <div className={"m-2"}><Image alt={"g"} className={"rounded-2xl"} src="/member.png" width={500}
                                                      height={60}/></div>

                    </div>
                </div>

                <div
                    className={" bg-blacck max-w-max p-5 flex-col justify-between flex border-solid border-2 border-black rounded-3xl  shadow-md"}>
                    <div className={"flex justify-between items-center"}>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Talentswide HR</div>
                            <div className={"text-ctext m-2 text-lg"}>HR Website for Talentswide</div>
                        </div>
                        <Image alt={"g"} src="/arrow.png" width={70} height={50}/>
                    </div>
                    <div className={"flex justify-center text-white"}>
                        <div className={"m-2"}><Image alt={"g"} className={"rounded-2xl"} src="/talenthr.png" width={500}
                                                      height={60}/></div>

                    </div>
                </div>
                <div
                    className={" bg-blacck max-w-max p-5 flex-col justify-between flex border-solid border-2 border-black rounded-3xl  shadow-md"}>
                    <div className={"flex justify-between items-center"}>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Moxa Template</div>
                            <div className={"text-ctext m-2 text-lg"}>portfolio Design for Moxa</div>
                        </div>
                        <Image alt={"g"} src="/arrow.png" width={70} height={50}/>
                    </div>
                    <div className={"flex justify-center text-white"}>
                        <div className={"m-2"}><Image alt={"g"} className={"rounded-2xl"} src="/moxa.png" width={500}
                                                      height={60}/></div>

                    </div>
                </div>
            </div>
            <div className={"flex justify-center"}>
                <button
                    className={" mt-20 pl-5 pr-5 text-lg text-white rounded-full rounded-2 border border-bimage p-2"}>See
                    All
                </button>
            </div>

            <div className={"flex justify-center mt-20"}>
                <div className={"flex flex-col justify-center items-center"}>
                    <div>
                        <Image alt={"g"} src="/circle.png" width={50}
                               height={60}/>
                    </div>
                    <div className={"text-ctext"}>TESTIMONIALS SECTION</div>
                    <div className={"text-white text-5xl mb-10 mt-5"}>Voices of Satisfaction</div>
                </div>
            </div>


            <div className={"flex justify-center flex-wrap gap-20"}>
                <div
                    className={" bg-blacck felx-wrap p-5 flex-col justify-between flex border-solid border-2 border-bimage rounded-3xl shadow-md"}>
                    <div className={"text-white w-96 text-2xl"}>Wei Chens design prowess is unmatched. His attention to
                        detail and innovative approach have transformed our products into sleek, user-centric
                        experiences.
                    </div>
                    <div className={"flex items-center"}>
                        <Image alt={"g"} src="/laura.png" width={70} height={50}/>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Laura perez</div>
                            <div className={"text-ctext m-2 text-lg"}>Fashion Designer Phoenix</div>
                        </div>

                    </div>

                </div>


                <div
                    className={" bg-blacck felx-wrap p-5 flex-col justify-between flex border-solid border-2 border-bimage rounded-3xl shadow-md"}>
                    <div className={"text-white w-96 text-2xl"}>Mr. Chen is a complete visionary designer. His ability
                        to translate complex ideas into intuitive interfaces has elevated our products to new heights.
                    </div>
                    <div className={"flex items-center"}>
                        <Image alt={"g"} src="/katarzyna.png" width={70} height={50}/>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Katarzyna Nowak</div>
                            <div className={"text-ctext m-2 text-lg"}>UX Designer Aurora</div>
                        </div>

                    </div>

                </div>

                <div
                    className={" bg-blacck felx-wrap p-5 flex-col justify-between flex border-solid border-2 border-bimage rounded-3xl shadow-md"}>
                    <div className={"text-white w-96 text-2xl"}>Working with Wei has been fruitful for our company. His
                        designs strike the perfect balance between functionality and aesthetics, impressing our clients.
                    </div>
                    <div className={"flex items-center"}>
                        <Image alt={"g"} src="/arthur.png" width={70} height={50}/>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Arthur Gauthier</div>
                            <div className={"text-ctext m-2 text-lg"}>Fashion Designer Phoenix</div>
                        </div>

                    </div>

                </div>
                <div
                    className={" bg-blacck felx-wrap p-5 flex-col justify-between flex border-solid border-2  border-bimage rounded-3xl shadow-md"}>
                    <div className={"text-white w-96 text-2xl"}>Wei Chens expertise as a product designer shines
                        through in every project. His designs seamlessly integrate with the users journey for sure.
                    </div>
                    <div className={"flex items-center"}>
                        <Image alt={"g"} src="/matthew.png" width={70} height={50}/>
                        <div>
                            <div className={"text-white m-2 text-2xl"}>Matthew Johnson</div>
                            <div className={"text-ctext m-2 text-lg"}>Data Software Engineering Stripe</div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={"flex justify-center mt-20 text-white"}>
                <div
                    className={" w-4/5 flex items-center justify-center flex-col border-solid border-2 bg-black border-blacck rounded-3xl shadow-md"}>
                    <div className={"p-2 mt-10"}><Image alt={"g"} src="/socialr.png" width={60} height={60}/></div>
                    <div className={"p-2 mt-10 mb-10 text-4xl flex text-center"}>Chcete spolupracovat ?</div>
                    <div className={" mb-10 text-2xl rounded-full bg-bbutton p-4"}>patri.moravec@email.cz</div>
                    <div
                        className={"bg-blacck w-full border-4 border-blacck rounded-b-2xl flex justify-center text-ctext"}>
                        SLIBUJI VÁM, ŽE ODPOVÍM DO 24 HODIN.
                    </div>
                </div>

            </div>


            <div className={" mt-10 text-white flex justify-center"}><Image alt={"g"} className={"pt-8"} src="/brickimg.png"
                                                                            width={80} height={56}/></div>
            <div className={"text-bimage flex justify-center text-xl"}>Skill Sekce</div>
            <div className={" font-Inter, sans-serif text-4xl text-white justify-center flex p-5"}>Dovendosti &
                Zkušenost
                Designu
            </div>

            <div className={"flex flex-wrap justify-center  gap-20"}>

                <div className={" rounded-2xl w-auto flex items-center border p-10"}>
                    <Image alt={"g"} src="/matthew.png" width={70} height={50}/>
                    <div>
                        <div className={"text-white m-2 text-2xl"}>Problem Solving</div>
                        <div className={"w-96 text-ctext m-2 text-lg"}>Innovative problem-solving and impactful
                            solutions for
                            a better experience.
                        </div>
                        <div className={"text-bimage m-2 text-lg"}>Design</div>
                    </div>

                </div>
                <div className={" rounded-2xl flex w-auto items-center border p-10 "}>
                    <Image alt={"g"} src="/matthew.png" width={70} height={50}/>
                    <div>
                        <div className={"text-white m-2 text-2xl"}>Problem Solving</div>
                        <div className={" w-96 text-ctext m-2 text-lg"}>Innovative problem-solving and impactful
                            solutions for
                            a better experience.
                        </div>
                        <div className={"text-bimage m-2 text-lg"}>Design</div>
                    </div>
                </div>

                <div className={" rounded-2xl flex w-auto items-center border p-10 "}>
                    <Image alt={"g"} src="/matthew.png" width={70} height={50}/>
                    <div>
                        <div className={"text-white m-2 text-2xl"}>Problem Solving</div>
                        <div className={" w-96 text-ctext m-2 text-lg"}>Innovative problem-solving and impactful
                            solutions for
                            a better experience.
                        </div>
                        <div className={"text-bimage m-2 text-lg"}>Design</div>
                    </div>

                </div>
                <div className={" rounded-2xl flex w-auto items-center border p-10 "}>
                    <Image alt={"g"} src="/matthew.png" width={70} height={50}/>
                    <div>
                        <div className={"text-white m-2 text-2xl"}>Problem Solving</div>
                        <div className={" w-96 text-ctext m-2 text-lg"}>Innovative problem-solving and impactful
                            solutions for
                            a better experience.
                        </div>
                        <div className={"text-bimage m-2 text-lg"}>Design</div>
                    </div>

                </div>

            </div>


            <div className={" mt-10 text-white flex justify-center"}><Image alt={"g"} className={"pt-8"} src="/brickimg.png"
                                                                            width={80} height={56}/></div>
            <div className={"text-bimage flex justify-center text-xl"}>Tool Sekce</div>
            <div className={" font-Inter, sans-serif text-4xl text-white justify-center flex p-5"}>Nástroje &
                Software
            </div>

            <div className={"flex justify-center mt-20 text-white"}>

                <div
                    className={" pb-5 w-2/3 flex items-center justify-center flex-col border-solid border-2 bg-black border-blacck rounded-3xl shadow-md"}>
                    <div
                        className={"bg-blacck w-full border-4 border-blacck rounded-t-2xl flex justify-center text-ctext"}>HERE
                        ARE THE TOOLS AND SOFTWARE I USE
                    </div>
                    <div className={"flex gap-20"}>
                        <div className={"flex flex-row"}>
                            <div>
                                <div className={" text-6xl flex justify-center text-bimage"}>.</div>
                                <div><Image alt={"g"} className={"bg-blacck rounded-2xl"} src="/photoshop.png" width={70}
                                            height={50}/></div>
                            </div>

                        </div>
                        <div className={"flex flex-row"}>
                            <div>
                                <div className={" text-6xl flex justify-center text-bimage"}>.</div>
                                <div><Image alt={"g"} className={"bg-blacck rounded-2xl"} src="/figma.png" width={70}
                                            height={50}/></div>
                            </div>

                        </div>
                        <div className={"flex flex-row"}>
                            <div>
                                <div className={" text-6xl flex justify-center text-bimage"}>.</div>
                                <div><Image alt={"g"} className={"bg-blacck rounded-2xl"} src="/framer.png" width={70}
                                            height={50}/></div>
                            </div>

                        </div>
                        <div className={"flex flex-row"}>
                            <div>
                                <div className={" text-6xl flex justify-center text-bimage"}>.</div>
                                <div><Image alt={"g"} className={"bg-blacck rounded-2xl"} src="/slack.png" width={70}
                                            height={50}/></div>
                            </div>

                        </div>
                        <div className={"flex flex-row"}>
                            <div>
                                <div className={" text-6xl flex justify-center text-bimage"}>.</div>
                                <div><Image alt={"g"} className={"bg-blacck rounded-2xl"} src="/webflow.png" width={70}
                                            height={50}/></div>
                            </div>

                        </div>
                        <div className={"flex flex-row"}>
                            <div>
                                <div className={" text-6xl flex justify-center text-bimage"}>.</div>
                                <div><Image alt={"g"} className={"bg-blacck rounded-2xl"} src="/adobeilustrator.png" width={70}
                                            height={50}/></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center mt-5"}>
                <div className={"flex text-center w-3/5 justify-center text-bimage"}>Explore the tools and software that
                    enable me to craft
                    remarkable designs,combining technology and creativity seamlessly.
                </div>
            </div>

            <div className={"flex justify-center mt-20"}>
                <Image alt={"g"} src="/educircle.png" width={70}
                       height={50}/>
            </div>
            <div className={" mt-5 flex justify-center text-bimage"}>BACKGROUND SECTION</div>
            <div className={" font-Inter, sans-serif text-4xl text-white justify-center flex p-5"}>Edukace & Kariéra
            </div>
            <div className={" flex justify-center"}>
                <div className={"flex  pl-5 pr-5 pb-2 rounded-full pt-2 justify-center  bg-blacck  mt-5 text-white"}>

                    <div className={"flex items-center bg-black rounded-full p-2"}>
                        <div><Image alt={"g"} className={"w-12 h-12"} src="/bookp.png" width={50} height={10}/></div>
                        <div className={"flex-grow text-center"}>
                            <span className={"text-white"}>Education</span>
                        </div>
                    </div>
                    <div className={"flex ml-5 items-center"}>
                        <Image alt={"g"} className={"w-8 h-8"} src="/medal.png" width={80} height={20}/>
                        <div className={"text-ctext"}>Awards</div>

                    </div>
                    <div className={"flex ml-5 items-center"}>
                        <Image alt={"g"} className={"w-8 h-8"} src="/clear-night.png" width={80} height={20}/>
                        <div className={"text-ctext"}>Career</div>

                    </div>
                </div>
            </div>

            <div className={"flex justify-center"}>
                <div className={"flex flex-col gap-10 justify-center mt-5"}>
                    <div className={"bg-blacck border-blacck rounded-2xl flex w-96 items-top border p-3 "}>
                        <Image alt={"g"} className={"w-12 h-12"} src="/book.png" width={80} height={20}/>
                        <div>
                            <div className={"text-white ml-2 text-lg"}>Master of Arts in Product Design</div>
                            <div className={" w-96 text-ctext ml-2 text-base"}>Rhode Island School of Design
                            </div>
                            <div className={"text-bimage ml-2 text-base"}>2018 - 2020</div>
                        </div>

                    </div>
                    <div className={"bg-blacck border-blacck rounded-2xl flex w-96 items-top border p-3 "}>
                        <Image  alt={"g"} className={"w-12 h-12"} src="/book.png" width={80} height={20}/>
                        <div>
                            <div className={"text-white ml-2 text-lg"}>Interaction Design Certification</div>
                            <div className={" w-96 text-ctext ml-2 text-base"}>Nielsen Norman Group
                            </div>
                            <div className={"text-bimage ml-2 text-base"}>2017 - 2018</div>
                        </div>

                    </div>
                    <div className={"bg-blacck border-blacck rounded-2xl flex w-96 items-top border p-3 "}>
                        <Image alt={"g"} className={"w-12 h-12"} src="/book.png" width={80} height={20}/>
                        <div>
                            <div className={"text-white ml-2 text-lg"}>Bachelor of Science in Industry</div>
                            <div className={" w-96 text-ctext ml-2 text-base"}>Pratt Institute
                            </div>
                            <div className={"text-bimage ml-2 text-base"}>2013 - 2017</div>
                        </div>

                    </div>

                </div>
            </div>


            <div className={"flex justify-center mt-20"}>
                <Image src="/educircle.png" width={70}
                       alt={"g"}     height={50}/>
            </div>
            <div className={" mt-5 flex justify-center text-bimage"}>BLOG SECTION</div>
            <div className={" font-Inter, sans-serif text-4xl text-white justify-center flex p-5"}>Články & Publikace
            </div>

            <div className={"flex flex-wrap justify-center  gap-20"}>

                <div className={" rounded-2xl w-auto flex items-center border p-10"}>
                    <div>
                        <Image className={"w-full"} src="/articleimg.png" width={70}
                               alt={"g"}      height={50}/>
                        <div className={"text-white w-96 m-2 text-2xl"}>The Power of Prototyping in UI Design</div>
                        <div className={" flex items-center  text-ctext m-2 text-lg"}><Image alt={"g"} className={"mr-5"}
                                                                                             src="/calendar.png"
                                                                                             width={40}
                                                                                             height={50}/>March 11,2023

                        </div>
                    </div>

                </div>
                <div className={" rounded-2xl flex w-auto items-center border p-10 "}>
                    <div>
                        <Image className={"w-full"} src="/articleimg.png" width={70}
                               alt={"g"}    height={50}/>
                        <div className={"text-white w-96 m-2 text-2xl"}>Exploring the Art of Typography</div>
                        <div className={" flex items-center  text-ctext m-2 text-lg"}><Image alt={"g"} className={"mr-5"}
                                                                                             src="/calendar.png"
                                                                                             width={40}
                                                                                             height={50}/>March 11,2023

                        </div>
                    </div>
                </div>
            </div>


            <div className={"flex justify-center"}>
                <button className={" mt-20 text-lg text-white rounded-full rounded-2 border-bimage border p-2"}>See
                    All
                </button>
            </div>

            <div className={"flex justify-center mt-20"}>
                <Image alt={"g"} src="/qcircle.png" width={70}
                       height={50}/>
            </div>
            <div className={" mt-5 flex justify-center text-bimage"}>F.A.Q. SECTION</div>
            <div className={" font-Inter, sans-serif text-5xl text-white justify-center flex p-5"}>Frequently Asked
                Questions
            </div>
            <div className={"flex justify-center"}>
                <div className={"flex w-4/12 flex-col gap-10 justify-center"}>
                    <div
                        className={"h-14 p-3 border border-bimage border-solid rounded-2xl text-white items-center justify-between flex"}>
                        <div>How can I contact Wei Chen?</div>
                        <Image alt={"g"} src="/player.png" width={30} height={50}/>
                    </div>

                    <div
                        className={" h-14 p-3 border border-bimage border-solid rounded-2xl text-white items-center justify-between flex "}>
                        <div>What is Wei Chens design process?</div>
                        <Image alt={"g"} src="/player.png" width={30} height={50}/>

                    </div>
                    <div
                        className={" h-14 p-3 border-bimage border border-solid rounded-2xl text-white items-center justify-between flex "}>
                        <div>What design services does Wei Chen offer?</div>
                        <Image alt={"g"} src="/player.png" width={30} height={50}/>

                    </div>
                    <div
                        className={"h-14 p-3 border border-bimage border-solid rounded-2xl text-white items-center justify-between flex "}>
                        <div>What is Wei Chens pricing structure?</div>
                        <Image alt={"g"} src="/player.png" width={30} height={50}/>

                    </div>
                    <div
                        className={" h-14 p-3 border border-bimage border-solid rounded-2xl text-white items-center justify-between flex "}>
                        <div>Does Wei Chen offer revisions?</div>
                        <Image alt={"g"} src="/player.png" width={30}
                               height={50}/>

                    </div>
                </div>

            </div>
            <div className={"grid place-items-center mt-20 text-white"}>
                <div
                    className={"w-4/5  flex flex-col border-solid border-2 items-center bg-black border-blacck rounded-3xl shadow-md"}>

                    <div
                        className={" w-full text-white items-center mt-10 mb-10 justify-between flex "}>
                        <div className={"flex items-center "}>
                            <div className={" ml-20 p-2 "}><Image alt={"g"} src="/socialr.png" width={60} height={60}/></div>
                            <div className={"p-2 ml-10  text-4xl flex text-center"}>Chcete spolupracovat ?</div>

                        </div>
                        <div className={" mr-20 text-2xl rounded-full bg-bbutton p-4"}>patri.moravec@email.cz</div>
                    </div>
                    <div
                        className={"  bg-blacck w-full border-4 border-blacck rounded-b-2xl flex justify-center text-ctext"}>
                        SLIBUJI VÁM, ŽE ODPOVÍM DO 24 HODIN.
                    </div>
                </div>
            </div>

            <div className={"flex  justify-evenly items-center mt-10  "}>

                <div className={"text-bimage"}>© 2023 Ruby Template. All rights reserved.</div>
                <div
                    className={" text-white flex items-center bg-black border border-bimage rounded-full text-sm pb-2 pt-2 pr-4 pl-4"}>
                    <Image
                        src="/coffee.png" width={30} height={60} alt={"g"}/>Buy me a coffee
                </div>


            </div>
            <div
                className={" p-2 bg-black  text-white rounded-xl w-40 pl-1 flex fixed bottom-4 right-6 shadow-md"}>
                <Image alt={"g"}
                    src="/framerr.png" width={20} height={60}/> Made in framer
            </div>
        </div>

    );
}
