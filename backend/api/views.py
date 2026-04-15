from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import SiteSettings

@api_view(['GET'])
def get_site_data(self):
    # DB-la irunthu data-va eduthu front-end ku anuppum
    data = SiteSettings.objects.first()
    if data:
        return Response({
            "main_title": data.main_title,
            "teachers_count": data.teachers_count,
            "experience_years": data.experience_years,
            "students_enrolled": data.students_enrolled,
            "total_branches": data.total_branches
        })
    return Response({
        "main_title": "Default", 
        "teachers_count": 160, 
        "experience_years": 20, 
        "students_enrolled": 565, 
        "total_branches": 22
    })

@api_view(['POST'])
@permission_classes([IsAuthenticated]) # JWT Token iruntha thaan update panna vidum
def update_site_data(request):
    obj, created = SiteSettings.objects.update_or_create(
        id=1, 
        defaults={
            'main_title': request.data.get('main_title', "Tiny Todds Therapy Care"),
            'teachers_count': request.data.get('teachers_count', 160),
            'experience_years': request.data.get('experience_years', 20),
            'students_enrolled': request.data.get('students_enrolled', 565),
            'total_branches': request.data.get('total_branches', 22)
        }
    )
    return Response({"message": "Successfully Updated!"})