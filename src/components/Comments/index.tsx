import { CommentCard } from "../CommentCard";
import "./style.css"

export function Comments(){
    return (
        <>
        <section className="comments">
            <h2>O que estão dizendo</h2>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
            <CommentCard></CommentCard>
        </section>
        </>
    );
}