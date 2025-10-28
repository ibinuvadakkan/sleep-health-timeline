// Sleep Health Calculator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const resultsSection = document.getElementById('results-section');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            // Get values from form
            const hours = parseFloat(document.getElementById('sleep-hours').value) || 7;
            const quality = parseInt(document.getElementById('sleep-quality').value) || 3;
            const consistency = parseInt(document.getElementById('sleep-consistency').value) || 3;
            
            // Calculate score
            const score = calculateSleepScore(hours, quality, consistency);
            
            // Update display
            document.getElementById('score-display').textContent = score;
            document.getElementById('score-label').textContent = getScoreLabel(score);
            
            // Show results
            resultsSection.style.display = 'block';
            
            // Scroll to results
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    function calculateSleepScore(hours, quality, consistency) {
        let score = 0;
        
        // Hours component (max 50 points)
        if (hours >= 7 && hours <= 9) {
            score += 50; // Optimal range
        } else if (hours >= 6.5 || (hours > 9 && hours <= 10)) {
            score += 40; // Good range
        } else if (hours >= 6 || hours > 10) {
            score += 25; // Fair range
        } else {
            score += 10; // Poor range
        }
        
        // Quality component (max 30 points)
        score += quality * 6;
        
        // Consistency component (max 20 points)
        score += consistency * 4;
        
        // Ensure score is between 0-100
        return Math.min(Math.max(score, 0), 100);
    }
    
    function getScoreLabel(score) {
        if (score >= 90) {
            return 'Excellent - Keep up the great sleep habits!';
        } else if (score >= 75) {
            return 'Good - Room for improvement';
        } else if (score >= 60) {
            return 'Fair - Your sleep needs attention';
        } else {
            return 'Poor - Significant improvement needed';
        }
    }
});
