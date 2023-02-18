from django.db import models


class Book(models.Model):
    BOOKS = (
        ('HB', 'Hobbit'),
        ('LOTR', 'Lord of the rings'),
    )
    title = models.CharField(max_length=36,
                             null=True,
                             blank=True,
                             unique=False,
                             default='',
                             choices=BOOKS)
    description = models.TextField(max_length=256,
                                   blank=True)
    price = models.DecimalField(default=0,
                                max_digits=4,
                                decimal_places=2)
    published = models.DateField(blank=True,
                                 default=None,
                                 null=True)
    cover = models.ImageField(upload_to='covers/',
                              blank=True)

    def __str__(self):
        return self.title
