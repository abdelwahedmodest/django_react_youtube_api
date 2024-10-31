from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Candidate
import json

@csrf_exempt
def submit_candidate(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        candidate = Candidate(
            actively_looking=data['actively_looking'],
            job_type=data['job_type'],
            other_job=data.get('other_job', ''),
            willing_to_learn=data['willing_to_learn']
        )
        candidate.save()
        return JsonResponse({'message': 'Data saved successfully!'})
    return JsonResponse({'error': 'Invalid request'}, status=400)
