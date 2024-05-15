import logoImg from '../assets/quiz-logo.png';

export default function Header() {
    return (
        <header>
            <img src={logoImg} alt="Empty list with writing pen"/>
            <h1>ReactQuiz</h1>
        </header>
    )
}