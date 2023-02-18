from django.db import models


class BookNumber(models.Model):
    isbn_10 = models.CharField(max_length=10)
    isbn_13 = models.CharField(max_length=13)


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

    number = models.OneToOneField(BookNumber,
                                  null=True,
                                  blank=True,
                                  on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Character(models.Model):
    name = models.CharField(max_length=30)
    book = models.ForeignKey(Book,
                             on_delete=models.CASCADE,
                             related_name='characters')


class Author(models.Model):
    name = models.CharField(max_length=30)
    surname = models.CharField(max_length=30)
    books = models.ManyToManyField(Book,
                                   related_name='authors')
