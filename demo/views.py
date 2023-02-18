from django.shortcuts import render
from django.views import View
from .models import Book
from rest_framework import viewsets
from .serializers import BookSerializer


def first(request):
    context = {
        'books': Book.objects.all(),
    }
    return render(request, 'demo/first.html', context)


class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()