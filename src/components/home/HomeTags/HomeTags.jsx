import { HomeTagsWrapper, Tag, TagsContainer } from "./HomeTags.styled";

const TAGS = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Node',
    'Express',
    'MongoDB',
    'SQL',
    'Python',
    'Java',
    'C++',
    'C#',
    'C'
]

const HomeTags = () => {
    return (
        <HomeTagsWrapper>
            <TagsContainer>
                {TAGS.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
                ))}
            </TagsContainer>
        </HomeTagsWrapper>
    );
};

export default HomeTags;