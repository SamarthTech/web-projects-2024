function countWordsAndDetails(text)
{
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    let charCount = text.length;
    let sentenceCount = (text.match(/[.!?]/g) || []).length;
    let paragraphCount = text.split(/\n+/).filter(para => para.length > 0).length;
    
    return {
        wordCount: words.length,
        charCount: charCount,
        sentenceCount: sentenceCount,
        paragraphCount: paragraphCount,
        topKeywords: getTopKeywords(words)
    };
}

function estimateReadingTime(wordCount)
{
    return Math.ceil(wordCount / 200);
}

function getTopKeywords(words)
{
    let wordMap = {};
    words.forEach(word => {
        word = word.toLowerCase();
        if (wordMap[word])
            {
                wordMap[word]++;
            }
            else
            {
                wordMap[word] = 1;
            }
    });
    
    let sortedWords = Object.keys(wordMap).sort((a, b) => wordMap[b] - wordMap[a]);
    
    return sortedWords.slice(0, 5).join(", ");
}

document.getElementById('countButton').addEventListener('click', function()
{
    let text = document.getElementById('textInput').value;    
    let result = countWordsAndDetails(text);
    document.getElementById('wordCount').textContent = result.wordCount;
    document.getElementById('charCount').textContent = result.charCount;
    document.getElementById('sentenceCount').textContent = result.sentenceCount;
    document.getElementById('paragraphCount').textContent = result.paragraphCount;
    document.getElementById('topKeywords').textContent = result.topKeywords || 'None';
    document.getElementById('readingTime').textContent = estimateReadingTime(result.wordCount);
});