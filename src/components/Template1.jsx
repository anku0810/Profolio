// Template1.jsx
import React from "react";
import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useResume } from "../Context";
import {
  MdMail,
  MdLocalPhone,
  MdLocationPin,
} from "react-icons/md";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiWindowFill,
} from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";
import myImage from "./pic.jpg";


const Template1 = () => {
  const {
    theme,
    about,
    educationList,
    skills,
    workList,
    projects,
    printElem,
  } = useResume();

  return (
    <Box
      className="template1-container"
      bg={"white"}
      rounded={"md"}
      shadow={"md"}
      overflow={"hidden"}
      minH={"100vh"}
    >
      <div ref={printElem}>
        <HStack justifyContent="space-between">
          <VStack m={4} alignItems="flex-start" spacing={0.5}>
            <Heading as="h4" size="md">
              {about.name ? about.name : "Harry Potter"}
            </Heading>
            <Text color={theme} fontWeight={"bold"}>
              {about.role ? about.role : "Full Stack Web Developer"}
            </Text>
            <HStack justifyContent={"space-between"}>
              <HStack spacing={1}>
                <MdMail />{" "}
                <Text>
                  {about.email ? about.email : "HarryPotter@hogwarts.edu"}
                </Text>
              </HStack>
              <HStack className="infoHolders" spacing={1}>
                <MdLocalPhone />{" "}
                <Text>
                  {about.phone ? about.phone : "+910000000000"}
                </Text>
              </HStack>
              <HStack className="infoHolders" spacing={1}>
                <MdLocationPin />{" "}
                <Text>
                  {about.address ? about.address : "Pune, MH"}
                </Text>
              </HStack>
              <HStack className="infoHolders" spacing={1}>
                <RiWindowFill />{" "}
                <Text as="a" href={about.website}>
                  Portfolio
                </Text>
              </HStack>
              <HStack className="infoHolders" spacing={1}>
                <RiGithubFill />{" "}
                <Text as="a" href={about.github}>
                  Github
                </Text>
              </HStack>
              <HStack className="infoHolders" spacing={1}>
                <RiLinkedinBoxFill />{" "}
                <Text as="a" href={about.linkedin}>
                  LinkedIn
                </Text>
              </HStack>
            </HStack>
          </VStack>
          {about.addResumeImage && (
            <>
              {about.picture ? (
                <img
                  className="avatarImage"
                  src={about.picture}
                  alt="avatar"
                />
              ) : (
                <img
                  className="avatarImage"
                  src={myImage}
                  alt="avatar"
                />
              )}
            </>
          )}
        </HStack>

        <HStack
          className="template1-content"
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <VStack spacing={6}>
            <VStack alignItems={"flex-start"}>
              <Box className="section-header">
                <Heading as="h4" size="md">
                  Summary
                </Heading>
              </Box>
              <Text color={"gray.600"}>
                {about.aboutMe
                  ? about.aboutMe
                  : "I am a skilled wizard, trained in the art of magical application development. Using the latest incantations and spells, I create enchanting web applications that are both visually stunning and functionally powerful. My focus on precision and quality magic ensures that every product I create is worthy of the highest praise from even the most critical of magical authorities."}
              </Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Box className="section-header">
                <Heading as="h4" size="md">
                  Education
                </Heading>
              </Box>
              {educationList.map((education, index) => (
                <EducationItem key={index} education={education} />
              ))}
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Box className="section-header">
                <Heading as="h4" size="md">
                  Work Experience
                </Heading>
              </Box>
              {workList.map((work, index) => (
                <WorkExperienceItem key={index} work={work} />
              ))}
            </VStack>
          </VStack>

          <VStack spacing={6}>
            <VStack alignItems={"flex-start"}>
              <Box className="section-header">
                <Heading as="h4" size="md">
                  Objectives
                </Heading>
              </Box>
              <Text color={"gray.600"}>
                {about.objectives
                  ? about.objectives
                  : "To leverage my skills in magical application development to create visually stunning and functionally powerful web applications that meet the highest standards of quality and exceed the expectations of even the most critical magical authorities."}
              </Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Box className="section-header">
                <Heading as="h4" size="md">
                  Skills
                </Heading>
              </Box>
              <Wrap>
                {skills.map((skill, index) => (
                  <SkillTag key={index} skill={skill} />
                ))}
              </Wrap>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Box className="section-header">
                <Heading as="h4" size="md">
                  Projects
                </Heading>
              </Box>
              {projects.map((project, index) => (
                <ProjectItem key={index} project={project} />
              ))}
            </VStack>
          </VStack>
        </HStack>
      </div>
    </Box>
  );
};

const EducationItem = ({ education }) => {
  const { degree, school, startYr, endYr, grade } = education;
  return (
    <VStack spacing={0} alignItems={"flex-start"} color={"gray.600"}>
      <Text fontWeight={"bold"} mb={0}>
        {degree ? degree : "Bachelor of Wizarding Science in Computer Engineering"}
      </Text>
      <Text fontSize={"sm"}>
        {school ? school : "Hogwarts School of Witchcraft and Wizardry"}
      </Text>
      <HStack
        fontSize={"xs"}
        fontStyle={"italic"}
        justifyContent={"space-between"}
      >
        <Text>
          {startYr ? startYr : 2018} - {endYr ? endYr : 2022}
        </Text>
        <Text>{grade ? grade : "10 CGPA"}</Text>
      </HStack>
    </VStack>
  );
};

const WorkExperienceItem = ({ work }) => {
  const {
    position,
    type,
    company,
    startDate,
    endDate,
    description: desc,
  } = work;
  return (
    <VStack spacing={0.5} alignItems={"flex-start"} color={"gray.600"}>
      <Text fontWeight={"bold"} mb={0}>
        {position ? position : "Full Stack Developer"}
      </Text>
      <Text fontSize={"sm"} fontWeight={"bold"}>
        {company ? company : "Nimbus Network Solutions"} - {type ? type : "Full-time"}
      </Text>
      <Text fontSize={"xs"} fontStyle={"italic"}>
        {startDate ? startDate : "2022-06"} - {endDate ? endDate : "2023-02"}
      </Text>
      <Text fontSize={"sm"} as="p">
        {desc
          ? desc
          : "Used wand (JavaScript) to vanquish bugs from existing websites and cast spells (implemented enhancements) that significantly improved web functionality and speed."}
      </Text>
    </VStack>
  );
};

const SkillTag = ({ skill }) => (
  <Tag size={"md"} borderRadius="md" variant="solid">
    <TagLabel>{skill.name}</TagLabel>
  </Tag>
);

const ProjectItem = ({ project }) => {
  const { name, url, description: desc } = project;
  return (
    <VStack spacing={0.5} alignItems={"flex-start"} color={"gray.600"}>
      <HStack as="a" href={url} target="_blank" spacing={0.5}>
        <Text fontWeight={"medium"} flex={"row"}>
          {name ? name : "Project Name"}{" "}
        </Text>{" "}
        <BiLinkExternal />
      </HStack>
      <UnorderedList pl={5}>
        <ListItem>
          <Text fontSize={"sm"} as="p">
            {desc
              ? desc
              : "Lorem ipsum dolor sit amet consectetur adipisicing."}
          </Text>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};

export default Template1;
