from django.db import migrations, models

class SiteSettings(models.Model):
    # Home page-oda title-ah save panna oru bucket
    main_title = models.CharField(max_length=255, default="Tiny Todds Therapy Care")
    teachers_count = models.IntegerField(default=160)
    experience_years = models.IntegerField(default=20)
    students_enrolled = models.IntegerField(default=565)
    total_branches = models.IntegerField(default=22)
    def __str__(self):
        return "Website Settings"