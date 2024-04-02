// student grader
function studentGrader(score){
    if( score>100 || score<0 ){
        console.log("invalid score")
    }else if ( score > 79) {
        grade ='A'
    }else if (score >=60 && score <=79)  {
        grade='B'
    }else if (score >=49 && score <= 59) {
        grade= 'C'
    }else if (score >=39 && score < 49) {
        grade= 'D'
    }else if (score <=38) {
        grade= 'E'
    }
    return grade
}   

console.log(studentGrader())
