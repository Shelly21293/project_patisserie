# Generated by Django 4.0.6 on 2022-09-08 19:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0008_remove_product_category_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='orderdetail',
            name='category_id',
        ),
        migrations.AddField(
            model_name='product',
            name='category_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='base.category'),
        ),
        migrations.AlterField(
            model_name='orderdetail',
            name='quantity',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=2),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=0, default=0, max_digits=4),
        ),
    ]
