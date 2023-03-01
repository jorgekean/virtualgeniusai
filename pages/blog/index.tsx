import { makeStyles } from '@mui/styles';
import { Box, Container, Typography } from '@mui/material';
import { createTheme } from "@mui/material/styles"
import Image from "next/image"

const theme = createTheme();

const useStyles = makeStyles(() => ({
    hero: {
        backgroundImage: `url('https://img.freepik.com/free-vector/digital-technology-face-artificial-intelligence-background_1017-19393.jpg?w=996&t=st=1677629720~exp=1677630320~hmac=88f95ddbb0b6642fc2f87c8d01541592b220d6c81641fdfbccc1b3bdf643ae6f')`,
        height: 'calc(100vh - 64px)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.palette.common.white,
        [theme.breakpoints.down('md')]: {
            height: '60vh',
        },
        [theme.breakpoints.down('sm')]: {
            height: '50vh',
        },
    },
    title: {
        fontWeight: 700,
        marginBottom: theme.spacing(3),
    },
    subtitle: {
        fontWeight: 300,
        marginBottom: theme.spacing(5),
    },
    content: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        lineHeight: 1.8,
        '& img': {
            maxWidth: '100%',
        },
        '& p': {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
        },
    },
}));

function Blog() {
    const classes = useStyles();

    return (
        <>
            {/* Hero section */}
            <div className={classes.hero}>
                <Container>
                    <Typography variant="h2" className={classes.title}>
                        Unleashing the Power of AI: The Latest Developments
                    </Typography>
                    <Typography variant="h5" className={classes.subtitle}>
                        Exploring the Revolutionary Advancements in Natural Language Processing, Computer Vision, Robotics, and More
                    </Typography>
                </Container>
            </div>

            {/* Content section */}
            <Container maxWidth="md" className={classes.content}>
                <Typography variant="body1" gutterBottom>
                    Artificial Intelligence has made incredible strides in recent years, with advancements in areas such as machine learning, natural language processing, computer vision, and robotics. Chat GPT,  have been at the forefront of these developments and continue to improve every day.
                </Typography>
                <img src="https://img.freepik.com/free-vector/chatbot-messenger-ai-applications-isometric-set-with-personal-time-finance-business-manager-bot-creation-isolated-vector-illustration_1284-73018.jpg?w=1060&t=st=1677630817~exp=1677631417~hmac=eb79ba935e319d6c03f036f1b9d9153906c883ff13dd904cd0e5c8a031a8c301" alt="AI" />
                <Typography variant="body1" gutterBottom>
                    One of the most significant recent advancements in AI has been the emergence of GPT-3, the third iteration of OpenAI&apos;s language model. GPT-3 has revolutionized the field of natural language processing, with its ability to generate coherent and contextually appropriate text in a variety of styles and genres. This has huge implications for fields such as content creation, marketing, and customer service.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Another major development in AI is the continued progress of computer vision and image recognition. With deep learning algorithms and neural networks, AI is now able to recognize and categorize images with incredible accuracy. This has many potential applications, including in medical imaging, surveillance, and self-driving cars.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Robotics is another area where AI is making significant strides. With advancements in machine learning, robots are becoming more capable of adapting to new situations and learning from their surroundings. This has huge implications for manufacturing, logistics, and healthcare, where robots can be used to perform repetitive or dangerous tasks.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Of course, these are just a few examples of the latest AI developments. There are countless others, from advancements in speech recognition to the development of autonomous drones. As an AI language model, I am excited to be a part of these developments and look forward to continuing to improve and advance the field.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    If you&apos;re interested in learning more about the latest AI developments, there are many great resources available online. Here are a few useful links:
                </Typography>

                <Typography variant="body1" gutterBottom>
                    <ol>
                        <li>OpenAI: <a href="https://openai.com/">https://openai.com/</a> - OpenAI is one of the leading research organizations in the field of AI, and they are responsible for many of the latest developments in areas such as natural language processing and robotics.</li>
                        <li>Google AI: <a href="https://ai.google/">https://ai.google/</a> - Google has been at the forefront of AI research for many years, and their website provides a wealth of information on their latest developments and projects.</li>
                        <li>NVIDIA: <a href="https://www.nvidia.com/en-us/ai/">https://www.nvidia.com/en-us/ai/</a> - NVIDIA is a leading manufacturer of GPUs, which are essential for many AI applications. Their website provides information on their latest products and technologies, as well as news and research in the field of AI.</li>
                        <li>MIT Technology Review: <a href="https://www.technologyreview.com/topic/artificial-intelligence/ ">https://www.technologyreview.com/topic/artificial-intelligence/ </a> - The MIT Technology Review is a great resource for news and analysis on the latest AI developments.</li>
                        <li>arXiv: <a href="https://arxiv.org/archive/cs">https://arxiv.org/archive/cs</a> - arXiv is a repository of scientific papers in the field of computer science, including many papers on AI research. It&apos;s a great resource for staying up-to-date on the latest developments in the field.</li>
                    </ol>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    I hope this blog post has provided some useful information on the latest AI developments, and I look forward to continuing to be a part of this exciting field!
                </Typography>
            </Container>

            <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3 }}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        © {new Date().getFullYear()}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >

                        <a href="https://www.freepik.com/free-vector/digital-technology-face-artificial-intelligence-background_4843026.htm#query=ai&position=5&from_view=keyword&track=sph">Images by starline</a> on Freepik
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

export default Blog;
