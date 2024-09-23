"use client"; // Marcar o componente como Client Component

function actionButton() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // Abre em uma nova aba
}

type TemplateButtonProps = {
    TextButton: string;
};

export default function TemplateButton({ TextButton }: TemplateButtonProps) {
    return (
        <button onClick={actionButton} className="bg-gray-950 text-slate-100 w-32 h-12">
            {TextButton} Share
        </button>
    );
}
